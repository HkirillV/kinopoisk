import { useState, useEffect } from "react";
import { Logo } from "@/shared/ui/Logo";
import { Navigation } from "@/entities/Navigation";
import { Search } from "@/features/Search";
import { Auth } from "@/features/Auth";
import { Button } from "@/shared/ui/Button";
import { BurgerMenu } from "@/widgets/BurgerMenu";

import "./Header.scss";

export const Header = () => {
  const [isOpenAuth, setIsOpenAuth] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(false);

  useEffect(() => {
    setSearchValue("");
  }, [isOpenSearch]);

  const onSearchButtonClick = () => {
    setIsOpenSearch((prevState) => !prevState);
  };

  const onAuthButtonClick = () => {
    setIsOpenAuth((prevState) => !prevState);
  };

  const onBurgerMenuButtonClick = () => {
    setIsOpenBurgerMenu((prevState) => !prevState);
  };

  return (
    <header className="header">
      <h1 className="visually-hidden">Кинопоиск</h1>
      <Logo className="header__logo" href="/" />
      <Navigation className="header__navigation" isVertical={false} />
      <Search
        className="header__search"
        name="search"
        type="search"
        placeholder="Поиск"
        isOpenSearch={isOpenSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onSearchButtonClick={onSearchButtonClick}
      />
      <Auth
        className="header__auth"
        isOpenAuth={isOpenAuth}
        onAuthButtonClick={onAuthButtonClick}
      />
      <Button
        className="button__burger-menu visible-mobile"
        onClick={onBurgerMenuButtonClick}
      >
        <span className="visually-hidden">Open navigation menu</span>
      </Button>
      <BurgerMenu
        isOpenBurgerMenu={isOpenBurgerMenu}
        onBurgerMenuButtonClick={onBurgerMenuButtonClick}
      />
    </header>
  );
};
