import { type Meta } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta

export const Default = {
  args: {},
}
