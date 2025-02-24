import { FC } from "react"
import { Button } from "@/shared/ui/Button";

import "./Navigation.scss"

interface INav {
  id: number,
  title: string,
  href: string,
}

const navigations: Array<INav> = [
  {
    id: 1,
    title: "Фильмы",
    href: "/"
  },
  {
    id: 2,
    title: "Сериалы",
    href: "/"
  },
  {
    id: 3,
    title: "Мультфильмы",
    href: "/"
  },
  {
    id: 4,
    title: "ТВ",
    href: "/"
  }
]


export const Navigation: FC = () => {

  return (
      <nav className="navigation">
        <ul className="navigation__list">
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