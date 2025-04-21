import { JSX } from "react";

interface IContainer {
  children: JSX.Element;
}

import "./Container.scss";

export const Container = (props: IContainer) => {
  const { children } = props;

  return <div className="container">{children}</div>;
};
