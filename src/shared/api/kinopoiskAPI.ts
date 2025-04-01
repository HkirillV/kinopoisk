import axiosClient from "@/shared/api/axiosClient";

export const kinopoiskAPI = {
  getMovies: async () => {
    const res = await axiosClient.get("/films/collections?type=TOP_250_MOVIES&page=1");
    return res.data.items;
  }
}