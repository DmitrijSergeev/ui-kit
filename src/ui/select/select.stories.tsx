import { Meta, StoryObj } from '@storybook/react'

import { Select } from './select'

const meta = {
  component: Select,
  title: 'Components/Select',
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
