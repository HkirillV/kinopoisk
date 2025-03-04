import { useState } from "react";
import { Logo } from "@/shared/ui/Logo";
import { Navigation } from "@/entities/Navigation";
import { Search } from "@/features/Search/ui";
import { Auth } from "@/features/Auth/ui";
import { BurgerMenu } from "@/entities/BurgerMenu/ui";

import "./Header.scss"

export const Header = () => {
  const [isOpenAuth, setIsOpenAuth] = useState<boolean>(false);

  const onAuthButtonClick = () => {
    setIsOpenAuth(prevState => !prevState);
  }

  return (
      <header className="header">
        <h1 className="visually-hidden">Кинопоиск</h1>
        <Logo className="header__logo" href="/"/>
        <Navigation className="header__navigation"/>
        <Search
            className="header__search"
            name="search"
            type="search"
            placeholder="Поиск"
        />
        <Auth className="header__auth" isOpenAuth={isOpenAuth} onClick={onAuthButtonClick}/>
        <BurgerMenu/>
      </header>
  )
}