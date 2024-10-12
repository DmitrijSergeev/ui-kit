import { Meta, StoryObj } from '@storybook/react'

import { Card } from './card'

const meta = {
  component: Card,
  title: 'Components/Card',
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
