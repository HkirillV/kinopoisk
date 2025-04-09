import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { useEffect, useState } from "react";
import { Button } from "@/shared/ui/Button";
import { kinopoiskAPI } from "@/shared/api/kinopoiskAPI";
import { addMovies } from "@/shared/slices/moviesSlice";
import { MAX_NUMBER_MOVIES_PAGE } from "@/shared/lib/config/constans";
import { Header } from "@/widgets/Header/ui";
import { Movie } from "@/entities/Movie/ui";
import { IMovie } from "@/shared/types/movieTypes";

import "./Home.scss";

export const Home = () => {
  const [displayedMovies, setDisplayedMovies] = useState<IMovie[]>([]);
  const [showMoreMovies, setShowMoreMovies] = useState(true);
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movies.list);

  useEffect(() => {
    kinopoiskAPI.getMovies()
      .then(res => {
        dispatch(addMovies(res));
      })
  }, [dispatch]);

  useEffect(() => {
    const initialDisplayedMovies = movies.slice(0, MAX_NUMBER_MOVIES_PAGE)
    setDisplayedMovies(initialDisplayedMovies);

    setShowMoreMovies(movies.length > MAX_NUMBER_MOVIES_PAGE);
  }, [movies]);

  const onShowMore = () => {
      const nextDisplayedMovies = movies.slice(0, displayedMovies.length + MAX_NUMBER_MOVIES_PAGE);
      setDisplayedMovies(nextDisplayedMovies);

    if (nextDisplayedMovies.length >= movies.length) {
      setShowMoreMovies(false);
    }
  }

  return (
    <div className="home">
      <Header/>
      <ul className="home__list">
        {
          displayedMovies.length > 0 && (
            displayedMovies.map((movie) => (
              <li className="home__item" key={movie.id}>
                <Button className="home__link" href={`/movie/${movie.id}`}>
                  <Movie {...movie}/>
                </Button>
              </li>
            ))
          )
        }
      </ul>
      <div className="home__footer">
        {
          showMoreMovies && (
            <Button
              className="button"
              onClick={onShowMore}
            >
              Показать еще
            </Button>
          )
        }
      </div>
    </div>
  )
}