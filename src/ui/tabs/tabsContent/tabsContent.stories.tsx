import { Meta, StoryObj } from '@storybook/react'

import { TabsContent } from './tabsContent'

const meta = {
  component: TabsContent,
  title: 'Components/TabsContent',
  tags: ['autodocs'],
} satisfies Meta<typeof TabsContent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Hello World',
    value: 'Buy World'
  },
}
