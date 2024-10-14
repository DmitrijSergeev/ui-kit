import * as TooltipRadix from '@radix-ui/react-tooltip'
import styles from './Toolltip.module.scss'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

export type TooltipProps = {
  children?: ReactNode
  content?: string
  sideOffset?: number
} & ComponentPropsWithoutRef<typeof TooltipRadix.Root>

export const Tooltip = forwardRef<ElementRef<typeof TooltipRadix.Trigger>, TooltipProps>(
  ({ children, content, sideOffset = 5, ...props }) => {
    return (
      <TooltipRadix.Provider>
        <TooltipRadix.Root>
          <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
          <TooltipRadix.Portal>
            <TooltipRadix.Content className={styles.content} sideOffset={sideOffset} {...props}>
              {content}
              <TooltipRadix.Arrow className={styles.arrow} />
            </TooltipRadix.Content>
          </TooltipRadix.Portal>
        </TooltipRadix.Root>
      </TooltipRadix.Provider>
    )
  }
)
