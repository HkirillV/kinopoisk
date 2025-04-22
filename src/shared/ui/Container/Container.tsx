import React, { PropsWithChildren } from "react";

import "./Container.scss";

type Props = PropsWithChildren<Record<string, never>>;

export const Container: React.FC<Props> = ({ children }) => {
  return <div className="container">{children}</div>;
};
