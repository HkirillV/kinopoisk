import { List } from "@/shared/ui/List"
import { Button } from "@/shared/ui/Button"

import "./Header.scss"

const navigations: string[] = [
  "Фильмы",
  "Сериалы",
  "Мультфильмы",
  "ТВ"
]

export const Header = () => {

  return (
      <header className="header">
        <nav className="header-navigation">
          <List className="header-navigation__list">
            {
              navigations.map((title: string) => (
                  <Button className="header-navigation__link" href="/">{title}</Button>
              ))}
          </List>
        </nav>
      </header>
  )
}