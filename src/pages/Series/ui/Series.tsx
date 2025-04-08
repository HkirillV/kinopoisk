import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { useEffect } from 'react';
import { kinopoiskAPI } from '@/shared/api/kinopoiskAPI';
import { addMovies } from '@/shared/slices/moviesSlice';
import { Header } from '@/widgets/Header/ui';
import { Button } from '@/shared/ui/Button';
import { Movie } from '@/entities/Movie/ui';

import "./Series.scss";

export const Series = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movies.list);

  useEffect(() => {
    kinopoiskAPI.getMovies()
      .then(res => {
        dispatch(addMovies(res));
      })
  }, [dispatch]);

  return (
    <div className="series">
      <Header/>
      <ul className="series__list">
        {
          movies.length > 0 && (
            movies.map((movie) => (
              <li className="series__item" key={movie.kinopoiskId}>
                <Button className="series__link" href={`/movie/${movie.kinopoiskId}`}>
                  <Movie {...movie}/>
                </Button>
              </li>
            ))
          )
        }
      </ul>
    </div>
  )
}