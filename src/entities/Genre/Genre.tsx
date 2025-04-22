import React from "react";
import classNames from "classnames";
import { IGenre } from "@/shared/types/mediaTypes";
import { addWithIdElement } from "@/shared/lib/utils/addWithIdElement";

import "./Genre.scss";

type GenreProps = {
  className?: string;
  children: IGenre[];
};

export const Genre = (props: GenreProps) => {
  const { className, children } = props;

  const genreWithId = addWithIdElement(children);

  return (
    <div className={classNames(className, "genre")}>
      <ul className="genre__list">
        {genreWithId.map(({ name, id }, index) => (
          <li className="genre__item" key={id}>
            {name}
            {index < genreWithId.length - 1 && ", "}
          </li>
        ))}
      </ul>
    </div>
  );
};
