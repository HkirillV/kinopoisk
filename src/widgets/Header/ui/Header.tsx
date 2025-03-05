import { useState } from "react";
import { Logo } from "@/shared/ui/Logo";
import { Navigation } from "@/entities/Navigation";
import { Search } from "@/features/Search/ui";
import { Auth } from "@/features/Auth/ui";

import "./Header.scss"

export const Header = () => {
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);

  const onAuthButtonClick = () => {
    setIsAuthOpen(prevState => !prevState);
  }

  return (
      <header className="header">
        <h1 className="visible-hidden">Кинопоиск</h1>
        <Logo className="header__logo" href="/"/>
        <Navigation className="header__navigation"/>
        <Search
            className="header__search"
            name="search"
            type="search"
            placeholder="Поиск"
        />
        <Auth className="header__auth" isAuthOpen={isAuthOpen} onClick={onAuthButtonClick}/>
      </header>
  )
}