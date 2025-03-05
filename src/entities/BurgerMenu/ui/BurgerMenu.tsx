import { useState } from "react";
import { Button } from "@/shared/ui/Button";
import { Search } from "@/features/Search/ui";
import { Auth } from "@/features/Auth/ui";

import "./BurgerMenu.scss"

export const BurgerMenu = () => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(true);
  const [isOpenAuth, setIsOpenAuth] = useState<boolean>(false);

  const onAuthButtonClick = () => {
    setIsOpenAuth(prevState => !prevState);
  }

  const onBurgerMenuButtonClick = () => {
    setIsOpenBurgerMenu(prevState => !prevState);
  }

  return (
      <dialog className="burger-menu mobile-overlay" open={isOpenBurgerMenu}>
        <form className="mobile-overlay__close-button-wrapper">
          <Button className="mobile-overlay__close-button" onClick={onBurgerMenuButtonClick}>
            <span className="visually-hidden">Close burger-menu</span>
          </Button>
        </form>
        <div className="mobile-overlay__body">
          <Search
              className="mobile-overlay__search"
              name="search"
              type="search"
          />
          <Auth
              className="mobile-overlay__auth"
              isOpenAuth={isOpenAuth}
              onClick={onAuthButtonClick}
          />
        </div>
      </dialog>
  )
}