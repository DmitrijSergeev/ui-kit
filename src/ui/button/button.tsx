import { ComponentPropsWithoutRef } from 'react'
import s from './button.module.scss'
import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export type ButtonProps = {
  asChild?: boolean
  variant?: 'primary' | 'secondary' | 'asLink'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>

export const Button = ({
  variant = 'primary',
  asChild,
  className,
  fullWidth,
  ...rest
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)} {...rest} />
  )
}
