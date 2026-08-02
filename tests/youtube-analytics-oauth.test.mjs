import assert from 'node:assert/strict'
import test from 'node:test'
import {
  buildAuthorizationUrl,
  parseOAuthClient,
  sanitizeOAuthError
} from '../scripts/youtube-analytics/oauth.mjs'

test('builds a PKCE authorization URL without the client secret', () => {
  const url = new URL(
    buildAuthorizationUrl({
      client: {
        clientId: 'client-id',
        clientSecret: 'never-show-this',
        redirectUri: 'http://127.0.0.1:53682/oauth2callback'
      },
      state: 'state-value',
      codeChallenge: 'challenge-value'
    })
  )

  assert.equal(url.searchParams.get('client_id'), 'client-id')
  assert.equal(url.searchParams.get('code_challenge'), 'challenge-value')
  assert.equal(url.searchParams.get('access_type'), 'offline')
  assert.equal(url.searchParams.has('client_secret'), false)
})

test('accepts installed OAuth credentials and redacts a secret value in errors', () => {
  assert.deepEqual(
    parseOAuthClient({ installed: { client_id: 'id', client_secret: 'secret' } }),
    {
      clientId: 'id',
      clientSecret: 'secret',
      redirectUri: 'http://127.0.0.1:53682/oauth2callback'
    }
  )

  assert.doesNotMatch(
    sanitizeOAuthError(new Error('invalid client secret super-private-value')),
    /super-private-value/
  )
})
