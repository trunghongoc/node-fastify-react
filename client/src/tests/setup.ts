import { expect, beforeAll, afterEach, afterAll } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

import { server } from '@/msw/server'

expect.extend(matchers)

// Establish API mocking before all tests.
beforeAll(() => server.listen())

afterEach(() => {
  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  server.resetHandlers()

  cleanup()
})

// Clean up after the tests are finished.
afterAll(() => server.close())
