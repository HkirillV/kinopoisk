import { FC } from "react"
import { Link } from "react-router-dom";
import classNames from 'classnames';
import logo from "@/shared/assets/icons/logo.svg"

interface ILogo {
  className?: string;
  to: string;
}

import "./Logo.scss"

export const Logo: FC<ILogo> = (props) => {
  const {
    className,
    to
  } = props

  return (
      <Link className={classNames(className, "logo")} to={to}>
        <img
            src={logo}
            width="66"
            height="66"
            loading="lazy"
            alt="/"/>
      </Link>
  )
}