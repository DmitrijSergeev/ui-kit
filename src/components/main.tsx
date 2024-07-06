import type { ComponentPropsWithoutRef } from 'react'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

import { Button } from './button'

export const Test = () => {
  return (
    <div>
      <Button as={MyLink} target={'_blank'} to={'https://google.com'}>
        Click me
      </Button>
    </div>
  )
}

export const MyLink = ({
  to,
  ...rest
}: { to: string } & Omit<ComponentPropsWithoutRef<'a'>, 'href'>) => {
  return <a href={to} {...rest} />
}
