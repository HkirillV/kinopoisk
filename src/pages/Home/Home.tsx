import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/useState/useState";
import { kinopoiskAPI } from '@/shared/api/kinopoiskAPI';
import { addMovies } from '@/shared/slices/moviesSlice';
import { Header } from "@/widgets/Header/ui";
import { Movie } from "@/entities/Movie/ui/Movie"

import "./Home.scss"

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
      <Header className="home__header"/>
      <Movie
        className="home__movie"
        movies={movies}
      />
    </div>
  )
}