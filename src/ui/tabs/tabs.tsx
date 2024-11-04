import * as TabsRadix from '@radix-ui/react-tabs'
import cn from './tabs.module.scss'
import { FC, ReactNode } from 'react'

//type Orientation = 'horizontal' | 'vertical'

type TabsType = {
  children: ReactNode
  defaultValue: string
  orientation?: TabsRadix.TabsProps['orientation']
  asChild?: boolean
}

export const Tabs: FC<TabsType> = ({
  children,
  defaultValue,
  orientation = 'horizontal',
  asChild = false,
}) => {
  return (
    <TabsRadix.Root
      asChild={asChild}
      className={cn.root}
      defaultValue={defaultValue}
      orientation={orientation as TabsRadix.TabsProps['orientation']}
    >
      {children}
    </TabsRadix.Root>
  )
}
