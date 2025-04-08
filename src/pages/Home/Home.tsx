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
      <ul className="home__list">
        {
          movies.length > 0 && (
            movies.map((movie) => (
              <li className="home__item" key={movie.id}>
                <Button className="home__link" href={`/movie/${movie.id}`}>
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