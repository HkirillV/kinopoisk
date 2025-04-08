import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { Header } from "@/widgets/Header/ui";
import { Movie } from "@/entities/Movie/ui";
import { IMovie } from "@/shared/types/movieTypes";

import "./MovieDetails.scss";

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState<IMovie | undefined>(undefined);
  const {movieId} = useParams<{ movieId: string }>();
  const movies = useAppSelector(state => state.movies.list);

  const movieIdNumber = Number(movieId);

  const movie = movies.find((movie) => movie.id === movieIdNumber);

  useEffect(() => {
    setMovieDetails(movie)
  }, [movie]);

  return (
    <div className="movie-details">
      <Header/>
      {
        movieDetails && (
          <Movie
            id={movieDetails.id}
            name={movieDetails.name}
            poster={movieDetails.poster}
            rating={movieDetails.rating}
            genres={movieDetails.genres}
          />
        )
      }
    </div>
  )
}