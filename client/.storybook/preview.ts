import type { Preview } from '@storybook/react'

import './scss/index.scss'

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
  },
}

export default preview
