import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { Header } from "@/widgets/Header/ui";
import { MediaElement } from "@/entities/MediaElement/ui";
import { IMovie } from "@/shared/types/mediaTypes";

import "./MediaDetails.scss";

export const MediaDetails = () => {
  const [mediaDetails, setMediaDetails] = useState<IMovie | undefined>(undefined);
  const {mediaId} = useParams<{ movieId: string }>();
  const movies = useAppSelector(state => state.movies.list);

  const movieIdNumber = Number(mediaId);

  const movie = movies.find((movie) => movie.id === movieIdNumber);

  useEffect(() => {
    setMediaDetails(movie)
  }, [movie]);

  return (
    <div className="media-details">
      <Header/>
      {
        mediaDetails && (
          <MediaElement
            id={mediaDetails.id}
            name={mediaDetails.name}
            poster={mediaDetails.poster}
            rating={mediaDetails.rating}
            genres={mediaDetails.genres}
          />
        )
      }
    </div>
  )
}