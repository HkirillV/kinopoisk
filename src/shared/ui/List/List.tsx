import React, { FC } from "react"
import { Button } from "@/shared/ui/Button"

import "./List.scss"

interface IListProps {
  className: string
  children: string[]
}

export const List: FC<IListProps> = (props) => {
console.log(props)
  const {
    className,
    children,
  } = props

  return (
      <ul className={className}>
        {
          children.map((item: string) => (
              <li className={className} key={index}>
                <Button className="" >
                  {item}
                </Button>
              </li>
          ))
        }
      </ul>
  )
}