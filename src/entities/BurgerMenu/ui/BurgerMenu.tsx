import { FC } from "react";
import { Button } from "@/shared/ui/Button";
import { Navigation } from "@/entities/Navigation"

import "./BurgerMenu.scss"

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
    <dialog className="burger-menu mobile-overlay" open={isOpenBurgerMenu}>
      <form className="mobile-overlay__close-button-wrapper">
        <Button className="mobile-overlay__close-button cross-button" onClick={onBurgerMenuButtonClick}>
          <span className="visually-hidden">Close burger-menu</span>
        </Button>
      </form>
      <div className="mobile-overlay__body">
        <Navigation
          className="mobile-overlay__navigation"
          isVertical={false}
        />
      </div>
    </dialog>
  )
}