import { type Meta } from '@storybook/react'
import { Button } from 'src/components/ui/button/button'

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta

export const Default = {
  args: {
    children: 'Default button',
    disabled: false,
  },
}
export const Secondary = {
  args: {
    children: 'Secondary button',
    disabled: false,
    variant: 'secondary',
  },
}

export const AlertOnClick = {
  args: {
    children: 'Alert!',
    disabled: false,
    onClick: () => alert('Button clicked'),
  },
}

export const ButtonAsLink = {
  args: {
    as: 'a',
    children: 'This is a link',
    href: 'https://google.com',
    target: '_blank',
  },
}
