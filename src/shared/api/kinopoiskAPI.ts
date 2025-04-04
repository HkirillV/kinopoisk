import axiosClient from "@/shared/api/axiosClient";
import { IMovie } from "@/shared/types/movieTypes";

export const kinopoiskAPI = {
  getMovies: async () => {
    const res = await axiosClient.get("/films/collections?type=TOP_250_MOVIES&page=1");
    const newItems: IMovie[] = res.data.items.map((item: IMovie) => ({
      ...item,
      genres: item.genres.slice(0, 3)
    }));

    return newItems;
  }
}