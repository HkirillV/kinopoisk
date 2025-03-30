import axiosClient from "@/shared/api/axiosClient";

export const kinopoiskAPI = {
  getMovies: async () => {
    const res = await axiosClient.get("/movie");
    return res.data;
  }
}