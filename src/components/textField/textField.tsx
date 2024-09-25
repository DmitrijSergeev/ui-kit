import {
  ChangeEvent,
  ComponentProps,
  forwardRef,
  useState,
  FocusEvent,
  KeyboardEvent,
  ReactElement,
} from 'react'
import { clsx } from 'clsx'

import s from './TextField.module.scss'
import { ButtonProps, IconButton } from '../Buttons/IconButton'
import { useId } from '@/shared/hooks/useId.ts'
import { IconProps } from '@/shared/ui/IconComponents/IconWrapper/IconWrapper.tsx'
import IcSearch from '../../assets/icons/components/IcSearch'
import { IcClear } from '@/shared/ui/IconComponents/IcClear/IcClear.tsx'
import { IcOpenEye } from '@/shared/ui/IconComponents/IcOpenEye/IcOpenEye.tsx'
import { IcCloseEye } from '@/shared/ui/IconComponents/IcCloseEye/IcCloseEye.tsx'

export type BaseTextFieldProps = {
  defaultValue?: readonly string[] | string | undefined
  disabled?: boolean
  error?: boolean | null | string
  fullwidth?: boolean
  id?: string
  label?: string
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  onChangeText?: (value: string) => void
  onClickSearch?: () => void
  onEnter?: () => void
  placeholder?: string
  textFieldClassName?: string
  triggerEnd?: ReactElement<ButtonProps | IconProps>
  type?: 'password' | 'search' | 'text'
} & Omit<ComponentProps<'input'>, 'type'>

export const TextField = forwardRef<HTMLInputElement, BaseTextFieldProps>((props, ref) => {
  const {
    defaultValue,
    disabled,
    error,
    fullwidth,
    id,
    triggerEnd,
    label,
    onBlur: customOnBlur,
    onChange,
    onChangeText,
    onClickSearch,
    onEnter,
    textFieldClassName,
    onKeyDown,
    placeholder,
    type = 'text',
    ...respProps
  } = props

  const [value, setValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const showClearButton = value.length > 0
  const textFieldType = type === 'password' && showPassword ? 'text' : type
  const textFieldId = useId(id, 'textField')

  const onClickHandleShowPass = () => {
    setShowPassword(!showPassword)
  }

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    const newValue = e.currentTarget.value

    onChangeText?.(newValue)
    setValue(newValue)
  }

  const onBlurCallback = (e: FocusEvent<HTMLInputElement>) => {
    customOnBlur && customOnBlur(e)
  }

  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    if (type === 'password' && e.code === 'Enter' && !showPassword) {
      e.preventDefault()
      onEnter && onEnter()
    }
    if (type === 'text') {
      if (e.code === 'Enter') {
        onEnter && onEnter()
      }
    }
  }

  const onClickHandlerSearchButton = () => {
    if (type === 'search' && onClickSearch && !disabled) {
      onClickSearch()
    }
  }

  const onClickClearSearchText = () => {
    if (!disabled) {
      setValue('')
      // Optionally, trigger onChangeText with empty string
      onChangeText && onChangeText('')
    }
  }

  const classNames = {
    btnClear: clsx(type === 'search' && s.btnClear, label && s.withLabel),
    btnSearch: clsx(
      type === 'search' && s.btnSearch,
      label && s.withLabel,
      fullwidth && s.btnSearchWithFullWidth
    ),
    button: clsx('s.button'),
    error: clsx(s.error, disabled && s.errorWithDisabled),
    iconSearch: clsx(s.iconSearch),
    iconShowPass: clsx('s.iconShowPass'),
    label: clsx(s.labelText, disabled && s.labelWithDisabled),
    showPassBtn: clsx(s.showPassBtn),
    triggerEnd: clsx(s.triggerEnd, label && s.withLabel, fullwidth && s.triggerEndWithFullwidth),
    showPassword: clsx(s.showPassword, label && s.withLabel, fullwidth && s.showPassWithFullwidth),
    textField: clsx(
      s.textField,
      fullwidth && s.fullwidth,
      error && s.errorText,
      type === 'password' && s.withShowPassword,
      type === 'search' && s.withSearchType,
      triggerEnd && s.withTriggerEnd,
      textFieldClassName ? textFieldClassName : ''
    ),
    textFieldWrapper: clsx(s.textFieldWrapper, fullwidth && s.fullwidth),
  }

  /** Если используется defaultValue, то значение управляется извне */
  const inputValue = defaultValue !== undefined ? defaultValue : value

  return (
    <div className={classNames.textFieldWrapper}>
      {type === 'search' && (
        <>
          <IconButton
            className={classNames.btnSearch}
            disabled={disabled}
            onClick={onClickHandlerSearchButton}
            variant={'secondary'}
            type="button"
          >
            <IcSearch className={classNames.iconSearch} />
          </IconButton>
          {showClearButton && (
            <IconButton
              className={classNames.btnClear}
              disabled={disabled}
              onClick={onClickClearSearchText}
              type={'reset'}
            >
              <IcClear size={1.3} />
            </IconButton>
          )}
        </>
      )}
      {label && (
        <label className={classNames.label} htmlFor={textFieldId}>
          {label}
        </label>
      )}
      <input
        className={classNames.textField}
        defaultValue={defaultValue}
        disabled={disabled}
        id={textFieldId}
        onBlur={onBlurCallback}
        onChange={onChangeCallback}
        onKeyDown={onKeyPressCallback}
        placeholder={placeholder}
        ref={ref}
        type={textFieldType}
        {...(defaultValue !== undefined ? {} : { value: inputValue })}
        {...respProps}
      />
      {error && (
        <span className={classNames.error} id={`${textFieldId}-error`}>
          {error}
        </span>
      )}
      {triggerEnd && <div className={classNames.triggerEnd}>{triggerEnd}</div>}
      {type === 'password' && (
        <div className={classNames.showPassword}>
          {showPassword ? (
            <IconButton
              className={classNames.showPassBtn}
              disabled={disabled}
              onClick={onClickHandleShowPass}
              type="button"
            >
              <IcOpenEye className={classNames.iconShowPass} size={1.3} />
            </IconButton>
          ) : (
            <IconButton
              className={classNames.showPassBtn}
              disabled={disabled}
              onClick={onClickHandleShowPass}
              type="button"
            >
              <IcCloseEye className={classNames.iconShowPass} size={1.3} />
            </IconButton>
          )}
        </div>
      )}
    </div>
  )
})
