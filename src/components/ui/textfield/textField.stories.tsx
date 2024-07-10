import { type Meta } from '@storybook/react'

import { TextField } from './textField'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta

export const Default = {
  args: {},
}
