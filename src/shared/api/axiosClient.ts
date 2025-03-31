import axios from "axios";

const API_KEY: string = "CSP912J-TDJM08G-PCEBX83-TSDT2Z9"

const baseURL =
  import.meta.env.DEV ?
    "https://api.kinopoisk.dev/v1.4/" :
    "";

const axiosClient = axios.create({
  baseURL,
  headers: {
    "X-API-KEY": API_KEY,
  }
})

export default axiosClient;