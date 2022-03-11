import React from 'react'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
} from '../types'

export type HeroContentProps =
  & React.HTMLAttributes<HTMLDivElement>
  & IComponentBaseProps

const HeroContent = ({
  dataTheme,
  className,
  children,
  ...props
}: HeroContentProps): JSX.Element => {
  const classes = twMerge(
    'hero-content',
    className,
  )

  return (
    <div
      {...props}
      data-theme={dataTheme}
      className={classes}
    >
      {children}
    </div>
  )
}

export default HeroContent