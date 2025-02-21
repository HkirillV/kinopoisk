import React, { FC } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import "./Button.scss"

interface IButton {
  readonly children: string,
  readonly type?: string,
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

  const isLink: boolean = Boolean(href)
  const isRegularLink: boolean | undefined =
      href?.startsWith("https://") ||
      href?.startsWith("www.") ||
      href?.startsWith("#")

  const combinedClassName: string = classNames(className, {
    button: !isLink
  });


  if (isLink) {
    if (isRegularLink) {
      return (
          <a
              className={combinedClassName}
              href={href}
              target={target}
          >
            {children}
          </a>
      )
    }

    if (href!) {
      return (
          <Link
              className={combinedClassName}
              to={href}
              target={target}
          >
            {children}
          </Link>
      )
    }
  }

  return (
      <Button className={combinedClassName}
              href={href}
              type={type}
              onClick={onClick}
              target={target}>
        {children}
      </Button>
  )
}
