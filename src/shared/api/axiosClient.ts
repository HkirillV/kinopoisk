import axios from "axios";

const apiKey: string = "CSP912J-TDJM08G-PCEBX83-TSDT2Z9"

const baseURL =
  import.meta.env.DEV ?
    "https://api.kinopoisk.dev/v1.4/" :
    "";

const axiosClient = axios.create({
  baseURL,
  headers: {
    "X-API-KEY": apiKey,
  }
})

export default axiosClient;