import { type ChangeEvent, type ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import Search from '@/assets/icons/search'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './textField.module.scss'

export type TextFieldProps = {
  className?: string
  errorText?: string
  inputClassName?: string
  label?: string
  onChangeValue?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    className,
    disabled,
    errorText,
    inputClassName,
    label,
    onChange,
    onChangeValue,
    type,
    value,
    ...rest
  } = props

  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev)
  }
  const inputType = type === 'password' && showPassword ? 'text' : type
  const isShowCloseIcon = type === 'search' && value

  const classNames = {
    input: clsx(
      s.input,
      s.active && !!value,
      s.error && !!errorText,
      s.isLeftIcon && type === 'search',
      (s.isRightIcon && type === 'password') || isShowCloseIcon,
      inputClassName
    ),
    label: clsx(s.label, disabled && s.disabled),
    labelError: clsx(errorText && s.error),
    leftIcon: s.left,
    rightIcon: s.right,
    root: clsx(s.root, className),
    wrapper: s.wrapper,
  }

  const handleClickClearField = () => {
    onChangeValue?.('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
  }

  return (
    <div className={classNames.root}>
      {label && (
        <Typography as={'label'} className={classNames.label} variant={'regular_text_14'}>
          {label}
        </Typography>
      )}
      <div className={classNames.wrapper}>
        {type === 'search' && <Search className={classNames.leftIcon} />}
        <input
          ref={ref}
          {...rest}
          className={classNames.input}
          disabled={disabled}
          onChange={handleChange}
          type={inputType}
          value={value}
        />
      </div>
    </div>
  )
})
