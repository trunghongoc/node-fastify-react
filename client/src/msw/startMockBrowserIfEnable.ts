import { setupWorker } from 'msw'
import { handlers } from './handlers'

import { ENV } from '@/utils'

export const startMockBrowserIfEnable = () => {
  if (!ENV.VITE_ENABLE_MSW) {
    return
  }

  // This configures a Service Worker with the given request handlers.
  const worker = setupWorker(...handlers)

  worker.start({
    onUnhandledRequest: 'bypass',
    quiet: true,
  })
}
