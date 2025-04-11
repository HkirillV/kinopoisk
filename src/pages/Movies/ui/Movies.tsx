import { useEffect, useState } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { kinopoiskAPI } from "@/shared/api/kinopoiskAPI";
import { addMovies } from "@/shared/slices/moviesSlice";
import { Header } from "@/widgets/Header/ui";
import { Button } from "@/shared/ui/Button";
import { MediaElement } from "@/entities/MediaElement/ui";
import { IMediaElement } from "@/shared/types/mediaTypes";
import { MAX_NUMBER_MOVIES_PAGE } from "@/shared/lib/config/constans";

import "./Movies.scss";

export const Movies = () => {
  const [displayedMovies, setDisplayedMovies] = useState<IMediaElement[]>([]);
  const [showMoreMovies, setShowMoreMovies] = useState(true);
  const dispatch = useAppDispatch();
  const movies: IMediaElement[] = useAppSelector(state => state.movies.list);

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
    <div className="movies">
      <Header/>
      <ul className="movies__list">
        {
          displayedMovies.length > 0 && (
            displayedMovies.map((movie) => (
              <li className="movies__item" key={movie.id}>
                <Button className="movies__link" href={`/film/${movie.id}`}>
                  <MediaElement {...movie}/>
                </Button>
              </li>
            ))
          )
        }
      </ul>
      <div className="movies__footer">
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