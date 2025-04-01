import { FC, ReactNode } from "react";
import classnames from "classnames";

import "./List.scss";

interface IList {
  className: string,
  children: ReactNode,
  id: number,
  name: string,
}

export const List: FC<IList> = (props) => {
  const {
    className,
    id,
    children
  } = props;

  console.log(props)

  return (
    <ul className={classnames(className, "list")}>
      <li className="list__item" key={id}>
        {children}
      </li>
    </ul>
  )
}