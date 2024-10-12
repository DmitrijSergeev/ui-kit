import { RadioGroup } from './radioGroup'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: RadioGroup,
  title: 'Components/RadioGroup',
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
