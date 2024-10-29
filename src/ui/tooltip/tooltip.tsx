import * as TooltipRadix from '@radix-ui/react-tooltip'
import s from './tooltip.module.scss'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

export type TooltipProps = {
  children?: ReactNode
  content?: ReactNode
  sideOffset?: number
} & ComponentPropsWithoutRef<typeof TooltipRadix.Root>

export const Tooltip = forwardRef<ElementRef<typeof TooltipRadix.Root>, TooltipProps>(
  ({ children, content, sideOffset = 5, ...props }, ref) => {
    return (
      <TooltipRadix.Provider>
        <TooltipRadix.Root>
          <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
          <TooltipRadix.Portal>
            <TooltipRadix.Content
              className={s.content}
              sideOffset={sideOffset}
              ref={ref}
              {...props}
            >
              {content}
              <TooltipRadix.Arrow className={s.arrow} />
            </TooltipRadix.Content>
          </TooltipRadix.Portal>
        </TooltipRadix.Root>
      </TooltipRadix.Provider>
    )
  }
)
