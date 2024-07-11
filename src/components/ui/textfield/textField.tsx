import { type ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './textField.module.scss'

export type TextFieldProps = {
  className?: string
  disabled?: boolean
  label?: string
} & ComponentPropsWithoutRef<'input'>
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { className, disabled, label, ...rest } = props

  const classNames = {
    input: s.input,
    label: clsx(s.label, disabled && s.disabled),
    root: clsx(s.root, className),
    wrapper: s.wrapper,
  }

  return (
    <div className={classNames.root}>
      {label && (
        <Typography as={'label'} className={classNames.label} variant={'bold_text_16'}>
          {label}
        </Typography>
      )}
      <div className={classNames.wrapper}>
        <input ref={ref} {...rest} className={classNames.input} disabled={disabled} />
      </div>
    </div>
  )
})
