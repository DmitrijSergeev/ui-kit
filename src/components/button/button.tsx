import { ComponentPropsWithoutRef } from 'react'
import s from './button.module.scss'
import clsx from 'clsx'

type Props = {
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>

export const Button = ({ variant = 'primary', className, fullWidth, ...rest }: Props) => {
  return (
    <button className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)} {...rest} />
  )
}
