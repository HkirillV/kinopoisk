import { FC, JSX } from "react";

interface IContainer {
  children: JSX.Element;
}

import "./Container.scss"

export const Container: FC<IContainer> = (props) => {
  const {
    children
  } = props;

  return (
      <div className="container">
        {children}
      </div>
  )
}