import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { useEffect, useState } from "react";
import { kinopoiskAPI } from "@/shared/api/kinopoiskAPI";
import { addSeries } from "@/shared/slices/seriesSlice";
import { Header } from "@/widgets/Header/ui";
import { Button } from "@/shared/ui/Button";
import { MediaElement } from "@/entities/MediaElement/ui";
import { MAX_NUMBER_SERIES_PAGE } from "@/shared/lib/config/constans";
import { IMediaElement } from "@/shared/types/mediaTypes";

import "./Series.scss";

export const Series = () => {
  const [displayedSeries, setDisplayedSeries] = useState<IMediaElement []>([]);
  const [showMoreSeries, setShowMoreSeries] = useState(true);
  const dispatch = useAppDispatch();
  const series = useAppSelector(state => state.series.list);

  useEffect(() => {
    kinopoiskAPI.getSeries()
      .then(res => {
        dispatch(addSeries(res));
      })
  }, [dispatch]);

  useEffect(() => {
    const initialDisplayedSeries = series.slice(0, MAX_NUMBER_SERIES_PAGE)
    setDisplayedSeries(initialDisplayedSeries);

    setShowMoreSeries(series.length > MAX_NUMBER_SERIES_PAGE);
  }, [series]);

  const onShowMore = () => {
    const nextDisplayedSeries = series.slice(0, displayedSeries.length + MAX_NUMBER_SERIES_PAGE);
    setDisplayedSeries(nextDisplayedSeries);

    if (nextDisplayedSeries.length >= series.length) {
      setShowMoreSeries(false);
    }
  }

  return (
    <div className="series">
      <Header/>
      <ul className="series__list">
        {
          displayedSeries.length > 0 && (
            displayedSeries.map((serial) => (
              <li className="series__item" key={serial.id}>
                <Button className="series__link" href={`/serial/${serial.id}`}>
                  <MediaElement {...serial}/>
                </Button>
              </li>
            ))
          )
        }
      </ul>
      <div className="series__footer">
        {
          showMoreSeries && (
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