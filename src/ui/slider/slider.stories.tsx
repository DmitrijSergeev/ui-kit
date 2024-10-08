import { Meta, StoryObj } from '@storybook/react'

import { Slider } from './slider'

const meta = {
  component: Slider,
  title: 'Components/Slider',
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
