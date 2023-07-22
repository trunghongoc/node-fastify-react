import type { Meta, StoryObj } from '@storybook/react'
import { Sample } from './index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'atoms/Sample',
  component: Sample,
  tags: ['atoms'],
  argTypes: {
    text: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Sample>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NoTextProps: Story = {
  args: {},
}

export const HasTextProps: Story = {
  args: {
    text: 'Test sample text',
  },
}
