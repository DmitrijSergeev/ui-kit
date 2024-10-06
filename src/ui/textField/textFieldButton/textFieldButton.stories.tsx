import { Meta, StoryObj } from '@storybook/react'
import { TextFieldButton } from './textFieldButton'

const meta = {
  component: TextFieldButton,
  title: 'Components/TextField/TextFieldButton',
  tags: ['autodocs'],
} satisfies Meta<typeof TextFieldButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
