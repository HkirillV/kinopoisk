import { Button } from "@/shared/ui/Button";

import "./BurgerMenu.scss"

export const BurgerMenu = () => {
  return (
      <dialog className="burger-menu">
        <Button className="burger-menu__button">
            <span className="burger-menu__"></span>
        </Button>
      </dialog>
  )
}