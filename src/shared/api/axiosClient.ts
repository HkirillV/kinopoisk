import axios from "axios";

const API_KEY: string = import.meta.env.VITE_API_KEY;

const baseURL = import.meta.env.DEV ? "https://api.kinopoisk.dev/v1.4/" : "";

const axiosClient = axios.create({
  baseURL,
  headers: {
    "X-API-KEY": API_KEY,
  },
});

export default axiosClient;
