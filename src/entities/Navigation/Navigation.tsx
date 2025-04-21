import { Link } from "react-router-dom";
import classNames from "classnames";

import "./Navigation.scss";

interface INavigationLink {
  id: number;
  title: string;
  href: string;
}

interface INavigation {
  className: string;
  isVertical: boolean;
}

const navigationsLink: Array<INavigationLink> = [
  {
    id: 1,
    title: "Главная",
    href: "/",
  },
  {
    id: 2,
    title: "Фильмы",
    href: "/movies",
  },
  {
    id: 3,
    title: "Сериалы",
    href: "/series",
  },
  {
    id: 4,
    title: "Мультфильмы",
    href: "/animation",
  },
  {
    id: 5,
    title: "ТВ",
    href: "/tvplus",
  },
];

export const Navigation = (props: INavigation) => {
  const { className, isVertical } = props;

  const navigationListClasses = isVertical
    ? "navigation__list-vertical"
    : "navigation__list";

  return (
    <nav className={classNames("navigation", className)}>
      <ul className={navigationListClasses}>
        {navigationsLink.map(({ id, title, href }) => (
          <li className="navigation__item" key={id}>
            <Link className="navigation__link" to={href}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
