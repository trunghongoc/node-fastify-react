import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
  build: {
    outDir: '../dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // test: {
  //   environment: 'jsdom',
  //   setupFiles: ['./tests/setup.ts'],
  //   testMatch: ['./src/**/*.test.tsx'],
  //   globals: true,
  // },
})
