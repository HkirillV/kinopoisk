import { FC } from "react";
import classNames from "classnames";
import { IGenre } from "@/shared/types/movieTypes";
import { addWithIdElement }  from "@/shared/lib/utils/addWithIdElement";

import "./Genre.scss";

interface IGenreProps {
  className?: string;
  children: IGenre[]
}

export const Genre: FC<IGenreProps> = (props) => {
  const {
    className,
    children
  } = props

  const genreWithId = addWithIdElement(children)

  return (
    <div className={classNames(className, "genre")}>
      <ul className="genre__list">
        {
          genreWithId.map(({name, id}, index) => (
            <li className="genre__item" key={id}>
              {name}
              {index < genreWithId.length - 1 && ", "}
            </li>
          ))
        }
      </ul>
    </div>
  )
}