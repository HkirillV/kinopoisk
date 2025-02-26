import { Logo } from "@/shared/ui/Logo";
import { Navigation } from "@/entities/Navigation";
import { Search } from '@/features/Search/ui';

import "./Header.scss"

export const Header = () => {

  return (
      <header className="header">
        <Logo className="header__logo" to="/"/>
        <Navigation/>
        <Search
            className="header__search"
            name="search"
            type="search"
            placeholder="Search"
        />
      </header>
  )
}