import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default button',
    disabled: false,
  },
}
export const Secondary: Story = {
  args: {
    children: 'Secondary button',
    disabled: false,
    variant: 'secondary',
  },
}

export const AlertOnClick: Story = {
  args: {
    children: 'Alert!',
    disabled: false,
    onClick: () => alert('Button clicked'),
  },
}

export const ButtonAsLink: Story = {
  args: {
    as: 'a',
    children: 'This is a link',
    href: 'https://google.com',
    target: '_blank',
  },
}
