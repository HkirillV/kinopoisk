import { FC } from "react";
import { Button } from "@/shared/ui/Button";
import { Navigation } from "@/entities/Navigation/ui";

import "./BurgerMenu.scss";
import classNames from "classnames";

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
    <div className={classNames("burger-menu", isOpenBurgerMenu ? "is-active" : "")}>
      <div className="burger-menu__blur" onClick={onBurgerMenuButtonClick}/>
      <div className="burger-menu__body">
        <div className="burger-menu__wrapper-button">
          <Button
            className="burger-menu__close-button"
            onClick={onBurgerMenuButtonClick}>
            <span className="visually-hidden">Close burger-menu</span>
          </Button>
        </div>
        <Navigation
          className="burger-menu__navigation"
          isVertical={true}
        />
      </div>
    </div>
  )
}