import { useState } from "react";
import classNames from "classnames";
import { Button } from "@/shared/ui/Button";
import { Navigation } from "@/entities/Navigation";
import { Auth } from "@/features/Auth";

import "./BurgerMenu.scss";

interface IBurgerMenu {
  isOpenBurgerMenu: boolean;
  onBurgerMenuButtonClick: () => void;
}

export const BurgerMenu = (props: IBurgerMenu) => {
  const { isOpenBurgerMenu, onBurgerMenuButtonClick } = props;

  const [isOpenAuth, setIsOpenAuth] = useState<boolean>(false);

  const onAuthButtonClick = () => {
    setIsOpenAuth((prevState) => !prevState);
  };

  return (
    <div
      className={classNames("burger-menu", {
        "is-active": isOpenBurgerMenu,
      })}
    >
      <div className="burger-menu__blur" onClick={onBurgerMenuButtonClick} />
      <div className="burger-menu__body">
        <div className="burger-menu__wrapper-button">
          <Auth
            className="burger-menu__auth"
            isOpenAuth={isOpenAuth}
            onAuthButtonClick={onAuthButtonClick}
          />
          <Button
            className="burger-menu__close-button"
            onClick={onBurgerMenuButtonClick}
          >
            <span className="visually-hidden">Close burger-menu</span>
          </Button>
        </div>
        <Navigation className="burger-menu__navigation" isVertical={true} />
      </div>
    </div>
  );
};
