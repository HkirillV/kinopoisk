import { Logo } from "@/shared/ui/Logo";
import { Navigation } from "@/entities/Navigation";

import "./Header.scss"

export const Header = () => {

  return (
      <header className="header">
        <Logo/>
        <Navigation/>
      </header>
  )
}