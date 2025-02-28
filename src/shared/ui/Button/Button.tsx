import React, { FC } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import "./Button.scss"

interface IButton {
  readonly children: React.ReactNode,
  readonly type?: "button" | "submit" | "reset",
  readonly href?: string,
  readonly className?: string,
  readonly target?: "_blank" | "_self" | "_parent" | "_top",
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
  const isRegularLink: boolean = href ? (
      href?.startsWith("https://") ||
      href?.startsWith("www.") ||
      href?.startsWith("#")
  ) : false

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

    return (
        <Link
            className={combinedClassName}
            to={href || "/"}
            target={target}
        >
          {children}
        </Link>
    )
  }

  return (
      <button className={combinedClassName}
              type={type}
              onClick={onClick}
      >
        {children}
      </button>
  )
}
