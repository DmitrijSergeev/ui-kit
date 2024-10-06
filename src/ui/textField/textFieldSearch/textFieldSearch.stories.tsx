import { Meta, StoryObj } from '@storybook/react'
import { TextFieldSearch } from './textFieldSearch'

const meta = {
  component: TextFieldSearch,
  title: 'Components/TextField/TextFieldSearch',
  tags: ['autodocs'],
} satisfies Meta<typeof TextFieldSearch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
