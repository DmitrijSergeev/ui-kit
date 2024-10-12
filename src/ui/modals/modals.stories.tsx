import { Modals } from './modals'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Modals,
  title: 'Components/Modals',
  tags: ['autodocs'],
} satisfies Meta<typeof Modals>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
