import Checkmark from '@/assets/icons/checkmark'
import * as CheckboxRadix from '@radix-ui/react-checkbox'

export type CheckboxProps = {}
export const Checkbox = () => {
  return (
    <div>
      <CheckboxRadix.Root>
        <CheckboxRadix.Indicator>
          <Checkmark />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
    </div>
  )
}
