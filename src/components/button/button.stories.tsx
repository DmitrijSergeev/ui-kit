import { Button } from './button'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'primary',
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'secondary',
  },
}
export const Fullwidth: Story = {
  args: {
    variant: 'primary',
    children: 'fullwidth',
    fullWidth: true,
  },
}
