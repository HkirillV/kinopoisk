import { useEffect } from "react"
import { List } from '@/shared/ui/List'

import "./Header.scss"

const navList: string[] = ["Фильмы", "сериалы"]

export const Header = () => {

  useEffect(() => {

  }, []);

  return (
      <header className="header">
        <nav className="header-navigation">
          <List className="header-navigation__list">
            {
              navList.map((item: string) => (
                  {item}
              ))
            }
          </List>
        </nav>
      </header>
  )
}