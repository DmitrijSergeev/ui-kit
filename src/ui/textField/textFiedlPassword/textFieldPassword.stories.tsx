import { Meta, StoryObj } from '@storybook/react'
import { TextFieldPassword } from './textFieldPassword'

const meta = {
  component: TextFieldPassword,
  title: 'Components/TextField/TextFieldPassword',
  tags: ['autodocs'],
} satisfies Meta<typeof TextFieldPassword>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
