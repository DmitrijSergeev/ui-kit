import { Control, FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components/input'

type Props<T extends FieldValues> = { control: Control<T> } & Omit<
  UseControllerProps<T>,
  'control' | 'defaultValue' | 'rules'
> &
  Omit<InputProps, 'onChange' | 'value'>

export const FormInput = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    disabled,
    name,
    shouldUnregister,
  })

  return <Input errorMessage={error?.message} {...field} {...rest} />
}
