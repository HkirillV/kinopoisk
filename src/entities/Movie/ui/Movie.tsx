import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useStore/useStore";
import { kinopoiskAPI } from "@/shared/api/kinopoiskAPI";
import { addMovies } from "@/shared/slices/moviesSlice";

import "./Movie.scss"

export const Movie = () => {

  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movies.list);
  console.log(movies);
  useEffect(() => {
    kinopoiskAPI.getMovies()
      .then(res => {
        dispatch(addMovies(res));
      })
  }, [dispatch]);

  return (
    <div className="movie">
      <ul className="movie__list">
        {/*{*/}
        {/*  movies.map((movie) => (*/}
        {/*    <li className="movie__item" key={movie.id}>*/}
        {/*      {movie.name}*/}
        {/*    </li>*/}
        {/*  ))*/}
        {/*}*/}
      </ul>
    </div>
  )
}