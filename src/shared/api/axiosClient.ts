import axios from "axios";

const API_KEY: string = "08ffbc0d-461a-4ed9-b1a7-b730057ff2f6"

const baseURL =
  import.meta.env.DEV ?
    "https://kinopoiskapiunofficial.tech/api/v2.2" :
    "";

const axiosClient = axios.create({
  baseURL,
  headers: {
    "X-API-KEY": API_KEY,
  }
})

export default axiosClient;