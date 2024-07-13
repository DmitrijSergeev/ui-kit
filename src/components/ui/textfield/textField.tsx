import { type ComponentProps, type ComponentPropsWithoutRef, forwardRef } from 'react'

import Search from '@/assets/icons/search'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './textField.module.scss'

export type TextFieldProps = {
  className?: string
  containerProps?: ComponentProps<'div'>
  disabled?: boolean
  label?: string
  labelProps?: ComponentProps<'label'>
} & ComponentPropsWithoutRef<'input'>
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { className, containerProps, disabled, label, type, ...rest } = props

  const classNames = {
    input: s.input,
    label: clsx(s.label, disabled && s.disabled),
    leftIcon: s.left,
    rightIcon: s.right,
    root: clsx(s.root, className),
    wrapper: s.wrapper,
  }

  return (
    <div className={classNames.root} {...containerProps}>
      {label && (
        <Typography as={'label'} className={classNames.label} variant={'bold_text_16'}>
          {label}
        </Typography>
      )}
      <div className={classNames.wrapper}>
        {type === 'search' && <Search />}
        <input ref={ref} {...rest} className={classNames.input} disabled={disabled} />
      </div>
    </div>
  )
})
