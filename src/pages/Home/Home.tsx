import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { useEffect } from "react";
import { Button } from "@/shared/ui/Button";
import { kinopoiskAPI } from "@/shared/api/kinopoiskAPI";
import { addMovies } from "@/shared/slices/moviesSlice";
import { Header } from "@/widgets/Header/ui";
import { Movie } from "@/entities/Movie/ui";

import "./Home.scss";

export const Home = () => {

  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movies.list);

  useEffect(() => {
    kinopoiskAPI.getMovies()
      .then(res => {
        dispatch(addMovies(res));
      })
  }, [dispatch]);

  return (
    <div className="home">
      <Header/>
      <ul className="movie-list">
        {
          movies.length > 0 && (
            movies.map(({kinopoiskId, nameRu, posterUrl, ratingKinopoisk, genres}) => (
              <li className="movie-list__item" key={kinopoiskId}>
                <Button className="movie-list__link" href={`/movie/${kinopoiskId}`}>
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