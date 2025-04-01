import { FC } from "react"
import classNames from "classnames"

import "./SvgIcon.scss"

interface ISvgIcon {
  className: string,
  src: string,
  width: string,
  height: string,
  loading: "eager" | "lazy" | undefined,
  alt: string,
}

export const SvgIcon: FC<ISvgIcon> = (props) => {
  const {
    className,
    src,
    width,
    height,
    loading,
    alt
  } = props

  return (
    <img
      className={classNames(className, "svg-icon")}
      src={src}
      width={width}
      height={height}
      loading={loading}
      alt={alt}
    />
  )
}