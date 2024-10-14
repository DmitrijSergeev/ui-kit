import { Meta, StoryObj } from '@storybook/react'

import { Tooltip } from './tooltip'

const meta = {
  component: Tooltip,
  title: 'Components/Tooltip',
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
