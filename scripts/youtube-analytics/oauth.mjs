import { createHash, randomBytes } from 'node:crypto'
import { readFile, mkdir, chmod, writeFile } from 'node:fs/promises'
import { createServer } from 'node:http'
import { dirname } from 'node:path'
import { platform } from 'node:process'
import { spawn } from 'node:child_process'

export const SCOPES = [
  'https://www.googleapis.com/auth/yt-analytics.readonly',
  'https://www.googleapis.com/auth/youtube.readonly'
]

export const LOOPBACK_REDIRECT_URI = 'http://127.0.0.1:53682/oauth2callback'

function toBase64Url(value) {
  return Buffer.from(value).toString('base64url')
}

function tokenIsUsable(token, now = Date.now()) {
  if (!token?.access_token || !token.expires_at) {
    return false
  }

  return new Date(token.expires_at).valueOf() > now + 60_000
}

export function parseOAuthClient(document) {
  const source = document.installed ?? document.web
  if (!source?.client_id) {
    throw new Error('OAuth client JSON must contain an installed or web client_id')
  }

  return {
    clientId: source.client_id,
    clientSecret: source.client_secret ?? '',
    redirectUri: LOOPBACK_REDIRECT_URI
  }
}

export function createPkcePair() {
  const verifier = toBase64Url(randomBytes(64))
  const challenge = createHash('sha256').update(verifier).digest('base64url')

  return { verifier, challenge }
}

export function buildAuthorizationUrl({ client, state, codeChallenge }) {
  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth')
  url.search = new URLSearchParams({
    client_id: client.clientId,
    redirect_uri: client.redirectUri,
    response_type: 'code',
    scope: SCOPES.join(' '),
    access_type: 'offline',
    prompt: 'consent',
    state,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256'
  }).toString()

  return url.toString()
}

export function sanitizeOAuthError(error) {
  const message = error instanceof Error ? error.message : String(error)

  return message
    .replace(/(access_token|refresh_token|client_secret|code)=([^\s&]+)/gi, '$1=[redacted]')
    .replace(/(client\s+secret|secret)\s+[^\s,]+/gi, '$1 [redacted]')
}

export function waitForAuthorizationCode({
  state,
  redirectUri = LOOPBACK_REDIRECT_URI,
  timeoutMs = 5 * 60 * 1000
}) {
  const callbackUrl = new URL(redirectUri)
  if (callbackUrl.hostname !== '127.0.0.1') {
    throw new Error('OAuth callback must use the 127.0.0.1 loopback address')
  }

  return new Promise((resolve, reject) => {
    let settled = false
    const server = createServer((request, response) => {
      const requestUrl = new URL(request.url ?? '/', redirectUri)

      if (requestUrl.pathname !== callbackUrl.pathname) {
        response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
        response.end('Not found')
        return
      }

      const receivedState = requestUrl.searchParams.get('state')
      const oauthError = requestUrl.searchParams.get('error')
      const code = requestUrl.searchParams.get('code')

      if (oauthError || receivedState !== state || !code) {
        response.writeHead(400, { 'content-type': 'text/html; charset=utf-8' })
        response.end('<h1>YouTube authorization did not complete.</h1><p>You can close this page.</p>')
        finish(new Error(oauthError ? `Google authorization failed: ${oauthError}` : 'Google authorization state did not match'))
        return
      }

      response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
      response.end('<h1>YouTube authorization complete.</h1><p>You can close this page and return to the terminal.</p>')
      finish(null, code)
    })
    const timeout = setTimeout(() => {
      finish(new Error('Google authorization timed out after five minutes'))
    }, timeoutMs)

    function finish(error, code) {
      if (settled) return
      settled = true
      clearTimeout(timeout)
      if (server.listening) server.close()
      if (error) reject(error)
      else resolve(code)
    }

    server.once('error', (error) => finish(error))
    server.listen(Number(callbackUrl.port), callbackUrl.hostname)
  })
}

async function requestToken({ client, parameters, fetchImpl = fetch }) {
  const body = new URLSearchParams({
    client_id: client.clientId,
    redirect_uri: client.redirectUri,
    ...parameters
  })
  if (client.clientSecret) body.set('client_secret', client.clientSecret)

  const response = await fetchImpl('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body
  })
  const payload = await response.json().catch(() => ({}))

  if (!response.ok || !payload.access_token) {
    throw new Error(`Google token request failed (${response.status}): ${payload.error_description ?? payload.error ?? 'Unknown error'}`)
  }

  return {
    ...payload,
    expires_at: new Date(Date.now() + Number(payload.expires_in ?? 3600) * 1000).toISOString()
  }
}

export async function exchangeAuthorizationCode({ client, code, codeVerifier, fetchImpl = fetch }) {
  return requestToken({
    client,
    fetchImpl,
    parameters: {
      code,
      code_verifier: codeVerifier,
      grant_type: 'authorization_code'
    }
  })
}

export async function refreshAccessToken({ client, refreshToken, fetchImpl = fetch }) {
  return requestToken({
    client,
    fetchImpl,
    parameters: {
      refresh_token: refreshToken,
      grant_type: 'refresh_token'
    }
  })
}

export async function readTokenFile(tokenFile) {
  try {
    return JSON.parse(await readFile(tokenFile, 'utf8'))
  } catch (error) {
    if (error?.code === 'ENOENT') return null
    throw new Error('Could not read the local YouTube authorization token')
  }
}

export async function writeTokenFile(tokenFile, token) {
  await mkdir(dirname(tokenFile), { recursive: true })
  await writeFile(tokenFile, JSON.stringify(token, null, 2) + '\n', { mode: 0o600 })
  await chmod(tokenFile, 0o600)
}

export function openAuthorizationUrl(url) {
  const command = platform === 'darwin' ? 'open' : platform === 'win32' ? 'cmd' : 'xdg-open'
  const args = platform === 'win32' ? ['/c', 'start', '', url] : [url]
  const child = spawn(command, args, { detached: true, stdio: 'ignore' })
  child.unref()
}

export async function getAccessToken({
  client,
  tokenFile,
  fetchImpl = fetch,
  openBrowser = openAuthorizationUrl,
  now = Date.now
}) {
  const stored = await readTokenFile(tokenFile)
  if (tokenIsUsable(stored, now())) {
    return stored.access_token
  }

  if (stored?.refresh_token) {
    const refreshed = await refreshAccessToken({
      client,
      refreshToken: stored.refresh_token,
      fetchImpl
    })
    const token = { ...stored, ...refreshed, refresh_token: refreshed.refresh_token ?? stored.refresh_token }
    await writeTokenFile(tokenFile, token)
    return token.access_token
  }

  const state = toBase64Url(randomBytes(32))
  const { verifier, challenge } = createPkcePair()
  const authorizationUrl = buildAuthorizationUrl({ client, state, codeChallenge: challenge })
  const authorizationCode = waitForAuthorizationCode({ state, redirectUri: client.redirectUri })

  openBrowser(authorizationUrl)

  const token = await exchangeAuthorizationCode({
    client,
    code: await authorizationCode,
    codeVerifier: verifier,
    fetchImpl
  })
  await writeTokenFile(tokenFile, token)

  return token.access_token
}
