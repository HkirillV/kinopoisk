import axiosClient from "@/shared/api/axiosClient";
import { AxiosResponse } from "axios";

interface IMovie {
  id: number
  name: string
}

const kinopoiskAPI = {

  getMovies: async (): Promise<AxiosResponse<IMovie[]>> => {

    const params = new URLSearchParams({

    });

    return axiosClient.get(`${params}`)
        .then(data => data)
  }
}

export default kinopoiskAPI;