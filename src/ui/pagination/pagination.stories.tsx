import { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './pagination'

const meta = {
  component: Pagination,
  title: 'Components/Slider',
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
