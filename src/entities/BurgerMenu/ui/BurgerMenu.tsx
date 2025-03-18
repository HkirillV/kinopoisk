import { FC } from "react";
import { Button } from "@/shared/ui/Button";
import { Navigation } from "@/entities/Navigation";

import "./BurgerMenu.scss";

interface IBurgerMenu {
  isOpenBurgerMenu: boolean;
  onBurgerMenuButtonClick: () => void;
}

export const BurgerMenu: FC<IBurgerMenu> = (props) => {
  const {
    isOpenBurgerMenu,
    onBurgerMenuButtonClick
  } = props

  return (
    <dialog className="burger-menu" open={isOpenBurgerMenu}>
      <div className="burger-menu__overlay" onClick={onBurgerMenuButtonClick}/>
      <form className="burger-menu__close-button-wrapper">
        <Button
          className="burger-menu__close-button cross-button"
          onClick={onBurgerMenuButtonClick}>
          <span className="visually-hidden">Close burger-menu</span>
        </Button>
      </form>
      <div className="burger-menu__body">
        <Navigation
          className="burger-menu__navigation"
          isVertical={true}
        />
      </div>
    </dialog>
  )
}