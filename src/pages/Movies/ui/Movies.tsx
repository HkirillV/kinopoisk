import { useEffect } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { kinopoiskAPI } from "@/shared/api/kinopoiskAPI";
import { addMovies } from "@/shared/slices/moviesSlice";
import { Header } from "@/widgets/Header/ui";
import { Button } from "@/shared/ui/Button";
import { Movie } from "@/entities/Movie/ui";

import "./Movies.scss";

export const Movies = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movies.list);

  useEffect(() => {
    kinopoiskAPI.getMovies()
      .then(res => {
        dispatch(addMovies(res));
      })
  }, [dispatch]);

  return (
    <div className="movies">
      <Header/>
      <ul className="movies-list">
        {
          movies.length > 0 && (
            movies.map(({kinopoiskId, nameRu, posterUrl, ratingKinopoisk, genres}) => (
              <li className="movies-list__item" key={kinopoiskId}>
                <Button className="movies-list__link" href={`/movies/${kinopoiskId}`}>
                  <Movie
                    kinopoiskId={kinopoiskId}
                    nameRu={nameRu}
                    posterUrl={posterUrl}
                    ratingKinopoisk={ratingKinopoisk}
                    genres={genres}
                  />
                </Button>
              </li>
            ))
          )
        }
      </ul>
    </div>
  )
}