import cn from './tabsTrigger.module.scss'
import * as TabsRadix from '@radix-ui/react-tabs'
import { clsx } from 'clsx'
import { FC } from 'react'

type TabsTriggerType = {
  value: string
  title: string
  className?: string
  ariaLabelList?: string
}
export const TabsTrigger: FC<TabsTriggerType> = ({ value, title, className }) => {
  const classNames = {
    trigger: clsx(cn.trigger, className ? className : ''),
  }

  return (
    <TabsRadix.Trigger className={classNames.trigger} value={value}>
      {title}
    </TabsRadix.Trigger>
  )
}
