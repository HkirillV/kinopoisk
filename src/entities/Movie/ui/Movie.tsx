import { useEffect } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { kinopoiskAPI } from "@/shared/api/kinopoiskAPI";
import { addMovies } from "@/shared/slices/moviesSlice";
import { Icon } from "@/shared/ui/Icon";
import { Genre } from "@/entities/Genre/ui";

import "./Movie.scss";

export const Movie = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movies.list);

  useEffect(() => {
    kinopoiskAPI.getMovies()
      .then(res => {
        dispatch(addMovies(res));
      })
  }, [dispatch]);

  return (
    <div className="movie">
      <ul className="movie__list">
        {
          movies.length > 0 && (
            movies.map(({kinopoiskId, nameRu, posterUrl, ratingKinopoisk, genres}) => (
              <li className="movie__item" key={kinopoiskId}>
                <Icon
                  className="movie__image"
                  src={posterUrl}
                  width="200"
                  height="200"
                  loading="lazy"
                  alt="/"
                />
                <h5 className="movie__title">{nameRu}</h5>
                <Genre className="movie__genre">
                  {genres}
                </Genre>
                <div className="movie__rating">
                  {ratingKinopoisk}
                </div>
              </li>
            ))
          )
        }
      </ul>
    </div>
  )
}