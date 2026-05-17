import { ref } from 'vue'

type PaddleCheckoutItem = {
  priceId: string
  quantity: number
}

type PaddleInstance = {
  Initialize: (options: { token: string }) => void
  Checkout: {
    open: (options: { items: PaddleCheckoutItem[]; customData: Record<string, string> }) => void
  }
}

type PaddleCheckoutOptions = {
  source: string
  errorMessage: string
}

declare global {
  interface Window {
    Paddle?: PaddleInstance
  }
}

const paddleToken = 'live_b4ee81104a6bf7a2afbf83f1962'
const paddleProductId = 'pro_01krtzzpewrxfy2s0fh2xf5c4j'
const paddlePriceId = 'pri_01krv04z33h5zf5xnf22n4t0kq'

let paddleInitialized = false

const loadPaddleScript = (): Promise<PaddleInstance> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Paddle checkout is only available in the browser.'))
      return
    }

    if (window.Paddle) {
      resolve(window.Paddle)
      return
    }

    const existingScript = document.querySelector(
      'script[src="https://cdn.paddle.com/paddle/v2/paddle.js"]'
    )
    if (existingScript) {
      existingScript.addEventListener(
        'load',
        () => {
          if (window.Paddle) {
            resolve(window.Paddle)
          } else {
            reject(new Error('Paddle checkout failed to load.'))
          }
        },
        { once: true }
      )
      existingScript.addEventListener('error', reject, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://cdn.paddle.com/paddle/v2/paddle.js'
    script.async = true
    script.onload = () => {
      if (window.Paddle) {
        resolve(window.Paddle)
      } else {
        reject(new Error('Paddle checkout failed to load.'))
      }
    }
    script.onerror = () => reject(new Error('Paddle checkout failed to load.'))
    document.head.appendChild(script)
  })
}

export const usePaddleCheckout = ({ source, errorMessage }: PaddleCheckoutOptions) => {
  const paddleLoading = ref(false)
  const paddleError = ref('')

  const openPaddleCheckout = async () => {
    paddleError.value = ''
    paddleLoading.value = true

    try {
      const Paddle = await loadPaddleScript()

      if (!paddleInitialized) {
        Paddle.Initialize({
          token: paddleToken
        })
        paddleInitialized = true
      }

      Paddle.Checkout.open({
        items: [
          {
            priceId: paddlePriceId,
            quantity: 1
          }
        ],
        customData: {
          product_id: paddleProductId,
          source
        }
      })
    } catch (error) {
      console.error(error)
      paddleError.value = errorMessage
    } finally {
      paddleLoading.value = false
    }
  }

  return {
    paddleLoading,
    paddleError,
    openPaddleCheckout
  }
}
