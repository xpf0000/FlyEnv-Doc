import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import test from 'node:test'
import { fileURLToPath } from 'node:url'
import { runInNewContext } from 'node:vm'
import ts from 'typescript'

const sourcePath = fileURLToPath(
  new URL('../docs/components/AppSponsorPage/usePaddleCheckout.ts', import.meta.url)
)
const { outputText } = ts.transpileModule(readFileSync(sourcePath, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
})

function checkoutWith(location, open) {
  const exports = {}
  runInNewContext(outputText, {
    exports,
    require: createRequire(sourcePath),
    URL,
    console,
    window: {
      location,
      Paddle: { Initialize() {}, Checkout: { open } }
    }
  })
  return exports.usePaddleCheckout
}

test('a successful checkout returns buyers to the payment instructions on the same site', async () => {
  let checkout
  const usePaddleCheckout = checkoutWith(
    { origin: 'https://flyenv.com', pathname: '/license' },
    (options) => {
      checkout = options
    }
  )
  const { openPaddleCheckout, paddleError } = usePaddleCheckout({
    source: 'license_page',
    errorMessage: 'Could not open checkout'
  })
  await openPaddleCheckout()
  assert.equal(checkout.settings?.successUrl, 'https://flyenv.com/payment-success')
  assert.equal(checkout.customData.source, 'license_page')
  assert.equal(checkout.items[0].quantity, 1)
  assert.equal(paddleError.value, '')
})

test('each translated checkout returns to its own language on the current site', async () => {
  for (const [pathname, source, expected] of [
    ['/zh/license', 'license_page_zh', 'http://localhost:4050/zh/payment-success'],
    ['/id/license', 'license_page_id', 'http://localhost:4050/id/payment-success'],
    ['/es/license', 'license_page_es', 'http://localhost:4050/es/payment-success'],
    ['/zh/sponsor', 'zh_sponsor_page', 'http://localhost:4050/zh/payment-success']
  ]) {
    let checkout
    const usePaddleCheckout = checkoutWith(
      { origin: 'http://localhost:4050', pathname },
      (options) => {
        checkout = options
      }
    )
    const { openPaddleCheckout } = usePaddleCheckout({
      source,
      errorMessage: 'Could not open checkout'
    })
    await openPaddleCheckout()
    assert.equal(checkout.settings?.successUrl, expected)
    assert.equal(checkout.customData.source, source)
  }
})

test('changing the site language before reopening checkout uses the new return page', async () => {
  const location = { origin: 'https://flyenv.com', pathname: '/zh/license' }
  let checkout
  const usePaddleCheckout = checkoutWith(location, (options) => {
    checkout = options
  })
  const { openPaddleCheckout } = usePaddleCheckout({
    source: 'license_page',
    errorMessage: 'Unavailable'
  })
  await openPaddleCheckout()
  assert.equal(checkout.settings?.successUrl, 'https://flyenv.com/zh/payment-success')
  location.pathname = '/es/license'
  await openPaddleCheckout()
  assert.equal(checkout.settings?.successUrl, 'https://flyenv.com/es/payment-success')
})

test('an unrecognized language path falls back to the English return page', async () => {
  let checkout
  const usePaddleCheckout = checkoutWith(
    { origin: 'https://flyenv.com', pathname: '/zh-extra/license' },
    (options) => {
      checkout = options
    }
  )
  await usePaddleCheckout({
    source: 'license_page',
    errorMessage: 'Unavailable'
  }).openPaddleCheckout()
  assert.equal(checkout.settings?.successUrl, 'https://flyenv.com/payment-success')
})

test('a checkout failure keeps the buyer on the purchase page and restores the button state', async (t) => {
  const usePaddleCheckout = checkoutWith(
    { origin: 'https://flyenv.com', pathname: '/license' },
    () => {
      throw new Error('Checkout unavailable')
    }
  )
  const previousError = console.error
  console.error = () => {}
  t.after(() => {
    console.error = previousError
  })
  const { openPaddleCheckout, paddleError, paddleLoading } = usePaddleCheckout({
    source: 'license_page',
    errorMessage: 'Could not open checkout'
  })
  await openPaddleCheckout()
  assert.equal(paddleError.value, 'Could not open checkout')
  assert.equal(paddleLoading.value, false)
})
