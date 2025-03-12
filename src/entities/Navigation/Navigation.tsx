import { FC } from "react"
import { Button } from "@/shared/ui/Button";
import classNames from "classnames";

import "./Navigation.scss"

interface INav {
  id: number,
  title: string,
  href: string,
}

interface INavigation {
  className: string,
  isVertical: boolean
}

const navigations: Array<INav> = [
  {
    id: 1,
    title: "Главная",
    href: "/"
  },
  {
    id: 2,
    title: "Фильмы",
    href: "/"
  },
  {
    id: 3,
    title: "Сериалы",
    href: "/"
  },
  {
    id: 4,
    title: "Мультфильмы",
    href: "/"
  },
  {
    id: 5,
    title: "ТВ",
    href: "/"
  }
]

export const Navigation: FC<INavigation> = (props) => {
  const {
    className,
    isVertical = false
  } = props

  const navigationListClasses =
    isVertical ?
      "navigation__list" :
      "navigation__list-vertical"


  return (
    <nav className={classNames(className, "navigation")}>
      <ul className={navigationListClasses}>
        {
          navigations.map(({id, title, href}) => (
            <li className="navigation__item" key={id}>
              <Button className="navigation__link" href={href}>{title}</Button>
            </li>
          ))}
      </ul>
    </nav>
  )
}