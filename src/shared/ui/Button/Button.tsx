import React, { FC } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import "./Button.scss"

interface IButton {
  readonly children: string,
  readonly type?: string
  readonly href?: string,
  readonly className?: string,
  readonly target?: string,
  readonly onClick?: () => void,
}

export const Button: FC<IButton> = (props) => {
  const {
    children,
    type = "button",
    onClick,
    href,
    className = "",
    target,
  } = props

  const isLink = Boolean(href)
  const isRegularLink =
      href?.startsWith("https://") ||
      href?.startsWith("www.") ||
      href?.startsWith("#")

  const Component = isLink ? (isRegularLink ? "a" : Link) : "button"
  const combinedClassName = classNames(className, {
    button: !isLink
  });

  const specificProps = isLink
      ? {
        ...(isRegularLink ? {href} : {to: href}),
        target,
        className: combinedClassName,
      }
      : {type, onClick, className: combinedClassName};


  return (
      <Component {...specificProps}>
        {children}
      </Component>
  )
}