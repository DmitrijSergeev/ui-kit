import { Meta, StoryObj } from '@storybook/react'

import { Scroll } from 'src/ui/scroll/scroll'

const meta = {
  component: Scroll,
  title: 'Components/Scroll',
  tags: ['autodocs'],
} satisfies Meta<typeof Scroll>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
