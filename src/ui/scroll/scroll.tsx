import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import s from './scroll.module.scss'

export type ScrollProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Scroll = forwardRef<HTMLDivElement, ScrollProps>(({ children, ...rest }, ref) => {
  return (
    <div className={clsx(s.scroll, ref)} {...rest}>
      {children}
    </div>
  )
})
