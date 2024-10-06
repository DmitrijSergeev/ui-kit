import { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'

const meta = {
  component: Typography,
  title: 'Components/Typography',
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
