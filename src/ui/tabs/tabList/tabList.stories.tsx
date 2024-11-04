import { Meta, StoryObj } from '@storybook/react'

import { TabsList } from './tabsList'

const meta = {
  component: TabsList,
  title: 'Components/TabsList',
  tags: ['autodocs'],
} satisfies Meta<typeof TabsList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Hello World',
  },
}
