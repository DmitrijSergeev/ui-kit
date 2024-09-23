import { ComponentPropsWithoutRef } from 'react'
import s from './button.module.css'

type Props = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary'
}
export const Button = (props: Props) => {
  return (
    <button {...props} className={s.button}>
      Hello World!!!
    </button>
  )
}
