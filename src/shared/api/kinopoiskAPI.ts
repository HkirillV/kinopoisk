import axiosClient from "@/shared/api/axiosClient";
import { IMediaElement  } from "@/shared/types/mediaTypes";

export const kinopoiskAPI = {
  getMovies: async () => {
    const res = await axiosClient.get("/movie?page=5&limit=30&lists=top250");
    const newItems: IMediaElement[] = res.data.docs.map((item: IMediaElement) => ({
      ...item,
      genres: item.genres.slice(0, 3)
    }));

    return newItems;
  },

  getSeries: async () => {
    const res = await axiosClient.get("/movie?page=5&limit=30&type=tv-series&typeNumber=2");
    const newItems: IMediaElement[] = res.data.docs.map((item: IMediaElement) => ({
      ...item,
      genres: item.genres.slice(0, 3)
    }));

    return newItems;
  }
}