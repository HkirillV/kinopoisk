import { FC, ReactNode } from "react"
import classNames from "classnames"

interface ISvgIcon {
  className: string,
  children: ReactNode,
  src: string,
  alt: string,
}

import "./SvgIcon.scss"

export const SvgIcon: FC<ISvgIcon> = (props) => {
  const {
    className,
    children,
    src,
    alt
  } = props

  return (
      <img
          className={classNames(className, "svg-icon")}
          src={src}
          children={children}
          alt={alt}
      />
  )
}