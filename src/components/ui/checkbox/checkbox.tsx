import Checkmark from '@/assets/icons/checkmark'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  className?: string
  disabled?: boolean
}
export const Checkbox = ({ className, disabled, ...rest }: CheckboxProps) => {
  const classNames = {
    buttonWrapper: clsx(s.wrapper, disabled && s.disabled),
    container: clsx(s.container, className),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: s.root,
  }

  return (
    <div className={classNames.container}>
      <Typography as={'label'} className={classNames.label}>
        <CheckboxRadix.Root {...rest} className={classNames.root}>
          <CheckboxRadix.Indicator className={classNames.indicator}>
            <Checkmark />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </Typography>
    </div>
  )
}
