import * as TabsRadix from '@radix-ui/react-tabs'
import cn from './tabsContent.module.scss'
import clsx from 'clsx'
import { FC, ReactNode } from 'react'

export type TabsContentType = {
  value: string
  className?: string
  children: ReactNode
}

export const TabsContent: FC<TabsContentType> = ({ value, className, children }) => {
  const classNames = {
    content: clsx(cn.content, className ? className : ''),
  }

  return (
    <TabsRadix.Content className={classNames.content} value={value}>
      {children}
    </TabsRadix.Content>
  )
}
