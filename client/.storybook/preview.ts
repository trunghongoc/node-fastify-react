import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'

import { handlers } from './../src/msw/handlers'

import './scss/index.scss'

// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass',
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      values: [
        { name: 'light', value: '#f8f8f8' },
        { name: 'white', value: '#fff' },
        { name: 'dark', value: '#333' },
        { name: 'black', value: '#000' },
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
    msw: {
      handlers,
    },
  },
  loaders: [mswLoader],
}

export default preview
