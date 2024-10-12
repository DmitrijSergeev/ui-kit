import { Meta, StoryObj } from '@storybook/react'

import { DropDownMenu } from './dropDownMenu'

const meta = {
  component: DropDownMenu,
  title: 'Components/DropDownMenu',
  tags: ['autodocs'],
} satisfies Meta<typeof DropDownMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
