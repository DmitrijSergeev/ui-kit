import * as TabsRadix from '@radix-ui/react-tabs'
import cn from './tabsList.module.scss'
import { FC, ReactNode } from 'react'
import clsx from 'clsx'

type TabsListType = {
  children: ReactNode
  ariaLabel?: string
}

export const TabsList: FC<TabsListType> = ({ children, ariaLabel }) => {
  const classNames = {
    list: clsx(cn.list),
  }

  return (
    <TabsRadix.List className={classNames.list} aria-label={ariaLabel}>
      {children}
    </TabsRadix.List>
  )
}
