import { FC } from "react";
import classNames from "classnames";
import { SvgIcon } from "@/shared/ui/SvgIcon";
import { List } from "@/shared/ui/List";

import "./Movie.scss";

interface IGenre {
  genre: string;
}

interface IMovie {
  kinopoiskId: number;
  nameRu: string;
  posterUrl: string;
  ratingKinopoisk: number;
  genres: IGenre[]
}

interface IMovieProps {
  className: string,
  movies: IMovie[]
}

export const Movie: FC<IMovieProps> = (props) => {
  const {
    className,
    movies
  } = props

  return (
    <div className={classNames(className, "movie")}>
      <List className="movie__list">
        {
          movies.map((movie) => (

        ))}
      </List>
    </div>
  )
}