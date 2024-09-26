import { Meta, StoryObj } from '@storybook/react'
import { TextField } from './textField'

const meta = {
  component: TextField,
  title: 'Components/TextField',
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
}

export const Email: Story = {
  args: {
    label: 'Email',
    type: 'email',
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
  },
}

export const Search: Story = {
  args: {
    label: 'Search',
    type: 'search',
  },
}

export const PasswordWithError: Story = {
  args: {
    error: 'password must be longer',
    label: 'Password',
    type: 'password',
  },
}

export const PasswordDisabled: Story = {
  args: {
    disabled: true,
    label: 'Password',
    type: 'password',
  },
}
