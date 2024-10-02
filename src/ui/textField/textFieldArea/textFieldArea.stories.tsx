import { Meta, StoryObj } from '@storybook/react'
import { TextFieldArea } from './textFieldArea'

const meta = {
  component: TextFieldArea,
  title: 'Components/TextFieldArea',
  tags: ['autodocs'],
} satisfies Meta<typeof TextFieldArea>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
