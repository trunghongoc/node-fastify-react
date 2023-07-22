import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  /* @ts-ignore */
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      include: ['./src/**/*.test.tsx'],
      transformMode: {
        web: [/\.[jt]sx$/],
      },
      setupFiles: [],
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    },
  }),
)

// './src/mocks/setupTests'
