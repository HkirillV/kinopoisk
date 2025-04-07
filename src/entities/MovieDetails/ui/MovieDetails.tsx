import { useParams } from "react-router-dom";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

import "./MovieDetails.scss";

export const MovieDetails = () => {
  const {movieId} = useParams<{ movieId: string }>();
  const movies = useAppSelector(state => state.movies.list);
  const movieIdNumber = Number(movieId);

  const movie = movies.find((movie) => movie.kinopoiskId === movieIdNumber);

  return (
    <div className="movie-details">
      {
        movie?.kinopoiskId
      }
    </div>
  )
}