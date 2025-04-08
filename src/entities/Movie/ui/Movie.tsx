import { FC } from "react";
import classNames from "classnames";
import { Icon } from "@/shared/ui/Icon";
import { Genre } from "@/entities/Genre/ui";
import { IMovie } from "@/shared/types/movieTypes";

import "./Movie.scss";

export const Movie: FC<IMovie> = (props) => {
  const {
    name,
    poster,
    rating,
    genres
  } = props

  return (
    <div className="movie">
      <Icon
        className="movie__image"
        src={poster.url}
        width="200"
        height="200"
        loading="lazy"
        alt="/"
      />
      <h5 className="movie__title">{name}</h5>
      <Genre className="movie__genre">
        {genres}
      </Genre>
      <div
        className={classNames("movie__rating",
          rating.imdb >= 9 ?
            "movie__rating-red" :
            "movie__rating-orange"
        )}>
        {rating.imdb}
      </div>
    </div>
  )
}