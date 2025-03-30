import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { kinopoiskAPI } from "@/shared/api/kinopoiskAPI";
import { addMovies } from "@/shared/slices/moviesSlice";
import { Header } from "@/widgets/Header/ui";

export const Home = () => {

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);
  console.log(movies);

  useEffect(() => {
    kinopoiskAPI.getMovies()
      .then(res => {
        dispatch(addMovies(res.data));
      })
  }, [dispatch]);

  return (
    <div className="home">
      <Header/>
    </div>
  )
}