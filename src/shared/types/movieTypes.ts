export interface IGenre {
  name: string;
}

export interface IRating {
  imdb: number
}

export interface IPoster {
  url: string
}

export interface IMovie {
  id: number;
  name: string;
  poster: IPoster;
  rating: IRating;
  genres: IGenre[]
}