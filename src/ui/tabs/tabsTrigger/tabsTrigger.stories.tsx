import { Meta, StoryObj } from '@storybook/react'

import { TabsTrigger } from './tabsTrigger'

const meta = {
  component: TabsTrigger,
  title: 'Components/TabsTrigger',
  tags: ['autodocs'],
} satisfies Meta<typeof TabsTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 'Buy World',
    title: 'Hello World',
  },
}
