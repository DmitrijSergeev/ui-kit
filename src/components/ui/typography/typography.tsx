import { type ComponentPropsWithoutRef, type ElementType, type ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'
export type TypographyProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'error'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
}
export const Typography = <T extends ElementType = 'p'>({
  as,
  className,
  variant = 'body1',
  ...rest
}: Omit<TypographyProps<T>, keyof ComponentPropsWithoutRef<'p'>> & TypographyProps<T>) => {
  const classNames = clsx(s.text, s[variant], className)
  const Component = as || 'p'

  return <Component className={classNames} {...rest} />
}
