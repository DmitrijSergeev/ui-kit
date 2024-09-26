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
