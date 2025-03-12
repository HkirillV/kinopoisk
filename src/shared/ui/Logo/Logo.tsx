import { FC } from "react"
import classNames from 'classnames';
import { Button } from "@/shared/ui/Button"
import logo from "@/shared/assets/icons/logo.svg"

interface ILogo {
  className: string;
  href: string;
}

import "./Logo.scss"

export const Logo: FC<ILogo> = (props) => {
  const {
    className,
    href
  } = props

  return (
    <Button className={classNames(className, "logo")} href={href}>
      <img
        src={logo}
        width="66"
        height="66"
        loading="lazy"
        alt="/"/>
    </Button>
  )
}