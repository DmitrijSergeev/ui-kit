import { Meta, StoryObj } from '@storybook/react'

import { Table } from './table'

const meta = {
  component: Table,
  title: 'Components/Table',
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
