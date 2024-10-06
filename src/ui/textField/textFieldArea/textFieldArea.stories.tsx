import { Meta, StoryObj } from '@storybook/react'
import { TextFieldArea } from './textFieldArea'

const meta = {
  component: TextFieldArea,
  title: 'Components/TextField/TextFieldArea',
  tags: ['autodocs'],
} satisfies Meta<typeof TextFieldArea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
}

export const WithError: Story = {
  args: {
    error: 'Error text',
    label: 'Error',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
    value: 'Hello World',
  },
}
