import { FC } from "react";
import classNames from "classnames";

import "./Icon.scss";

interface IIcon {
  className: string,
  src?: string,
  width: string,
  height: string,
  loading: "eager" | "lazy" | undefined,
  alt: string,
}

export const Icon: FC<IIcon> = (props) => {
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
      className={classNames(className, "icon")}
      src={src}
      width={width}
      height={height}
      loading={loading}
      alt={alt}
    />
  )
}