import React, { FC } from "react"
import classNames from "classnames"

interface IButton {
  readonly children: string,
  readonly type?: string
  readonly href: string,
  readonly className: string,
  readonly target: string,
  readonly onClick?: () => void,
}

import "./Button.scss"

export const Button: FC<IButton> = (props) => {
  const {
    children,
    type = "button",
    onClick,
    href,
    className,
    target,
  } = props

  const linkProps = {target}
  const buttonProps = {type, onClick}

  const isLink = Boolean(href)
  const isRegularLink = href?.startsWith("https://") || href?.startsWith("www.")


  return (
      <Component className={classNames(className)}>
        {children}
      </Component>
  )
}