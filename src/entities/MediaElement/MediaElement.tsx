import classNames from "classnames";
import { Icon } from "@/shared/ui/Icon";
import { Genre } from "@/entities/Genre";
import { IMediaElement } from "@/shared/types/mediaTypes";

import "./MediaElement.scss";

const baseUrlImg =
  "https://image.openmoviedb.com/kinopoisk-images/10671298/a1f5fc29-5309-4027-940b-ec12daa60421/orig";

export const MediaElement = (props: IMediaElement) => {
  const { name, alternativeName, poster, rating, genres } = props;

  return (
    <div className="media-element">
      <Icon
        className="media-element__image"
        src={poster?.url || baseUrlImg}
        width="200"
        height="200"
        loading="lazy"
        alt="/"
      />
      <h5 className="media-element__title">{name || alternativeName}</h5>
      <Genre className="media-element__genre">{genres}</Genre>
      <div
        className={classNames(
          "media-element__rating",
          rating?.imdb >= 9
            ? "media-element__rating-red"
            : "media-element__rating-orange",
        )}
      >
        {rating?.imdb}
      </div>
    </div>
  );
};
