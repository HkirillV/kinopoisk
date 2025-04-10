import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { useEffect } from "react";
import { kinopoiskAPI } from "@/shared/api/kinopoiskAPI";
import { addSeries } from "@/shared/slices/seriesSlice";
import { Header } from "@/widgets/Header/ui";
import { Button } from "@/shared/ui/Button";
import { MediaElement } from "@/entities/MediaElement/ui";

import "./Series.scss";

export const Series = () => {
  const dispatch = useAppDispatch();
  const series = useAppSelector(state => state.series.list);

  useEffect(() => {
    kinopoiskAPI.getSeries()
      .then(res => {
        dispatch(addSeries(res));
      })
  }, [dispatch]);

  return (
    <div className="series">
      <Header/>
      <ul className="series__list">
        {
          series.length > 0 && (
            series.map((serial) => (
              <li className="series__item" key={serial.id}>
                <Button className="series__link" href={`/series/${serial.id}`}>
                  <MediaElement {...serial}/>
                </Button>
              </li>
            ))
          )
        }
      </ul>
      {/*<div className="series__footer">*/}
      {/*  {*/}
      {/*    showMoreMovies && (*/}
      {/*      <Button*/}
      {/*        className="button"*/}
      {/*        onClick={onShowMore}*/}
      {/*      >*/}
      {/*        Показать еще*/}
      {/*      </Button>*/}
      {/*    )*/}
      {/*  }*/}
      {/*</div>*/}
    </div>
  )
}