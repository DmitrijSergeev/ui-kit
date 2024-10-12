import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta = {
  component: Checkbox,
  title: 'Components/Checkbox',
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
