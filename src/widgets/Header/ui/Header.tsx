import { Button } from "@/shared/ui/Button"

import "./Header.scss"

interface INav {
  id: number,
  title: string,
}

const navigations: Array<INav> = [
  {
    id: 1,
    title: "Фильмы"
  },
  {
    id: 2,
    title: "Сериалы"
  },
  {
    id: 3,
    title: "Мультфильмы"
  },
  {
    id: 4,
    title: "ТВ"
  }
]

export const Header = () => {

  return (
      <header className="header">
        <nav className="header-navigation">
          <ul className="header-navigation__list">
            {
              navigations.map(({id, title}) => (
                  <li className="header-navigation__item" key={id}>
                    <Button className="header-navigation__link" href="/">{title}</Button>
                  </li>
              ))}
          </ul>
        </nav>
      </header>
  )
}