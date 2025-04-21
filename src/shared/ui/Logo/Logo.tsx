import classNames from "classnames";
import { Link } from "react-router-dom";
import logo from "@/shared/assets/icons/logo.svg";
import { Icon } from "@/shared/ui/Icon";

interface ILogo {
  className: string;
  href: string;
}

import "./Logo.scss";

export const Logo = (props: ILogo) => {
  const { className, href } = props;

  return (
    <Link className={classNames(className, "logo")} to={href}>
      <Icon
        className="logo__icon"
        src={logo}
        width="66"
        height="66"
        loading="lazy"
        alt="/"
      />
    </Link>
  );
};
