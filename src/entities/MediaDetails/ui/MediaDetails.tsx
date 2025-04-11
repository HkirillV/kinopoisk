import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { Header } from "@/widgets/Header/ui";
import { MediaElement } from "@/entities/MediaElement/ui";
import { IMediaElement } from "@/shared/types/mediaTypes";

import "./MediaDetails.scss";

export const MediaDetails = () => {
  const [mediaDetails, setMediaDetails] = useState<IMediaElement | undefined>(undefined);
  const {mediaId} = useParams<{ mediaId: string }>();
  const movies: IMediaElement[] = useAppSelector(state => state.movies.list);
  const series: IMediaElement[] = useAppSelector(state => state.series.list);

  const mediaIdNumber = Number(mediaId);

  const movie = movies.find((movie: IMediaElement ) => movie.id === mediaIdNumber);
  const serial = series.find((serial: IMediaElement ) => serial.id === mediaIdNumber);
  const mediaElement = movie ? movie : serial

  useEffect(() => {
    setMediaDetails(mediaElement);
  }, [mediaElement]);

  return (
    <div className="media-details">
      <Header/>
      {
        mediaDetails && (
          <MediaElement
            id={mediaDetails.id}
            alternativeName={mediaDetails.alternativeName}
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