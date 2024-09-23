import { Button } from './button'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Button,
  title: 'Button',
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}
