import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import Checkmark from '@/assets/icons/checkmark'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  label?: string
} & Omit<ComponentPropsWithoutRef<typeof CheckboxRadix.Root>, 'asChild'>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ className, disabled, label, ...rest }, ref) => {
    const classNames = {
      indicator: s.indicator,
      label: clsx(s.label, disabled && s.disabled),
      root: s.root,
    }

    return (
      <Typography as={'label'} className={classNames.label}>
        <CheckboxRadix.Root {...rest} className={classNames.root} ref={ref}>
          <CheckboxRadix.Indicator className={classNames.indicator}>
            <Checkmark />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        {label}
      </Typography>
    )
  }
)
