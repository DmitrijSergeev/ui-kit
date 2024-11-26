import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'
import s from './button.module.scss'
import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export type ButtonProps = {
  asChild?: boolean
  variant?: 'outline' | 'contain' | 'text'
  color?: string
  endIcon?: ReactNode
  fullWidth?: boolean
  startIcon?: ReactNode
} & ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'contain', asChild, className, fullWidth, children, startIcon, endIcon, ...rest },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className, ref)}
        {...rest}
      >
        {startIcon}
        {children}
        {endIcon}
      </Comp>
    )
  }
)
