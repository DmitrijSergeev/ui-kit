import React, { ComponentPropsWithoutRef, forwardRef } from 'react'
import s from './textFieldArea.module.scss'
import clsx from 'clsx'

export type TextAreaProps = {
  classNameTextArea?: string
  error?: string
  label?: string
  resize?: 'both' | 'horizontal' | 'none' | 'vertical'
  variantScroll?: 'small' | 'medium' // todo: maxRow, types Andrey
} & ComponentPropsWithoutRef<'textarea'>

export const TextFieldArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { label, classNameTextArea, resize = 'both', className, error, id = label, disabled, ...props },
    ref
  ) => {
    const classNames = {
      container: clsx(s.container, className),
      label: clsx(s.label, disabled && s.disabled),
      textarea: clsx(error && s.error, s.textarea, classNameTextArea),
    }
    return (
      <div className={classNames.container}>
        {label && (
          <label className={classNames.label} htmlFor={id}>
            {label}
          </label>
        )}
        <textarea
          className={classNames.textarea}
          disabled={disabled}
          id={id}
          ref={ref}
          style={{ resize: resize, ...props.style }}
          {...props}
        ></textarea>
        {error && <span className={s.error}>{error}</span>}
      </div>
    )
  }
)
