import axiosClient from "@/shared/api/axiosClient";
import { IMovie } from "@/shared/types/movieTypes";

export const kinopoiskAPI = {
  getMovies: async () => {
    const res = await axiosClient.get("/movie?page=5&limit=30&lists=top250");
    const newItems: IMovie[] = res.data.docs.map((item: IMovie) => ({
      ...item,
      genres: item.genres.slice(0, 3)
    }));

    return newItems;
  },
}