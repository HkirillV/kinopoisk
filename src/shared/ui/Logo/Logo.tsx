import { FC } from "react"
import { Link } from "react-router-dom";

interface ILogo {
  className?: string;
  name?: string;
}

import "./Logo.scss"
import classNames from 'classnames';

export const Logo: FC<ILogo> = (props) => {
  const {
    className,
    name
  } = props

  return (
      <Link className={classNames(className, "logo")} to="/">
        <img
            src="@/shared/assets/icons/logo.svg"
            width="32"
            height="32"
            loading="lazy"
            alt="/"/>
      </Link>
  )
}