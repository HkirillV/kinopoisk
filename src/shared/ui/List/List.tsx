import React, { FC, JSX } from "react"
import { v4 as uuidv4 } from 'uuid';

import "./List.scss"
import classNames from 'classnames';

interface IListProps {
  className?: string,
  children: JSX.Element[]
}

export const List: FC<IListProps> = (props) => {
  const {
    className,
    children
  } = props

  return (
      <ul className={className}>
        {children.map((child: JSX.Element) => (
            <li className={classNames()} key={uuidv4()}>
              {child}
            </li>
        ))}
      </ul>
  )
}