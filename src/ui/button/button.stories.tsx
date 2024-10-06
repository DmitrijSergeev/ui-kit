import { Button } from './button'
import { Meta, StoryObj } from '@storybook/react'
import { Eye, EyeOff } from '../../assets/icons/components'

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
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
}
export const Fullwidth: Story = {
  args: {
    variant: 'primary',
    children: 'fullwidth',
    fullWidth: true,
  },
}
export const AsLink: Story = {
  args: {
    children: 'AsLink',
    variant: 'text',
  },
  render: args => {
    return (
      <Button {...args}>
        {' '}
        <a href={'https://www.google.com/'} target={'_blank'}>
          Go to Google
        </a>
      </Button>
    )
  },
}
export const WithIconEye: Story = {
  args: {
    children: 'User',
    endIcon: <Eye />,
    variant: 'secondary',
  },
}
export const WithIconEyeOff: Story = {
  args: {
    children: 'User',
    endIcon: <EyeOff />,
    variant: 'secondary',
  },
}
