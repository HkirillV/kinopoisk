import React, { PropsWithChildren } from "react";
import classNames from "classnames";

import "./Button.scss";

type ButtonProps = PropsWithChildren<{
  type?: HTMLButtonElement["type"];
  href?: string;
  className?: string;
  target?: HTMLAnchorElement["target"];
  mode?: string;
  onClick?: () => void;
}>;

export const Button = (props: ButtonProps) => {
  const {
    type = "button",
    onClick,
    href,
    children,
    className = "",
    target,
    mode,
  } = props;

  const isLink = href !== undefined;
  const Component = isLink ? "a" : "button";
  const linkProps = { href, target };
  const buttonProps = { type };
  const specificProps = isLink ? linkProps : buttonProps;

  return (
    <Component
      className={classNames(className, {
        [`button--${mode}`]: mode,
      })}
      {...specificProps}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};
