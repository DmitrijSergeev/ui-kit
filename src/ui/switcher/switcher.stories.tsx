import { Meta, StoryObj } from '@storybook/react'

import { Switcher } from './switcher'

const meta = {
  component: Switcher,
  title: 'Components/Switcher',
  tags: ['autodocs'],
} satisfies Meta<typeof Switcher>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
