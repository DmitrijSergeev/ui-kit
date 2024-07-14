import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './textField'

const meta = {
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
    placeholder: 'Disabled ',
    type: 'text',
    value: 'Disabled',
  },
}
export const TypeSearch: Story = {
  args: {
    label: 'Search',
    type: 'search',
    value: 'Search',
  },
}
