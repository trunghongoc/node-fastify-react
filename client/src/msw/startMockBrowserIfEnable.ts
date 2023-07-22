import axios from 'axios'
import { ENV } from '@/utils'

export const startMockBrowserIfEnable = async () => {
  console.log('=======> ENV:', ENV)
  if (!ENV.VITE_ENABLE_MSW || ENV.PROD) {
    return
  }

  const { setupWorker } = await import('msw')
  const { handlers } = await import('./handlers')

  console.log({
    handlers,
    setupWorker,
  })

  // This configures a Service Worker with the given request handlers.
  const worker = setupWorker(...handlers)

  worker.start({
    onUnhandledRequest: 'bypass',
    quiet: true,
  })

  await axios.get('http://localhost/mockServiceWorker.js')
}
