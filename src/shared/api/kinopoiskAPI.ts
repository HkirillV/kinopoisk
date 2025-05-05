import axiosClient from "@/shared/api/axiosClient";
import { IMediaElement } from "@/shared/types/mediaTypes";

export const kinopoiskAPI = {
  getMovies: async () => {
    const res = await axiosClient.get("/movie", {
      params: {
        page: 5,
        limit: 30,
        lists: "top250",
      },
    });

    const newItems: IMediaElement[] = res.data.docs.map(
      (item: IMediaElement) => ({
        ...item,
        genres: item.genres ? item.genres.slice(0, 3) : [{ name: "драма" }],
      }),
    );

    return newItems;
  },

  getSerials: async () => {
    const res = await axiosClient.get("/movie", {
      params: {
        page: 5,
        limit: 30,
        type: "tv-series",
        typeNumber: 2,
      },
    });

    const newItems: IMediaElement[] = res.data.docs.map(
      (item: IMediaElement) => ({
        ...item,
        genres: item.genres ? item.genres.slice(0, 3) : [{ name: "драма" }],
      }),
    );

    return newItems;
  },

  getCartoons: async () => {
    const res = await axiosClient.get("/movie", {
      params: {
        page: 5,
        limit: 30,
        type: "cartoon",
      },
    });

    const newItems: IMediaElement[] = res.data.docs.map(
      (item: IMediaElement) => ({
        ...item,
        genres: item.genres ? item.genres.slice(0, 3) : [{ name: "драма" }],
      }),
    );

    return newItems;
  },
};
