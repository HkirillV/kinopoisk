export interface IGenre {
  genre: string;
}

export interface IMovie {
  kinopoiskId: number;
  nameRu: string;
  posterUrl: string;
  ratingKinopoisk: number;
  genres: IGenre[]
}

export interface MoviesState {
  list: IMovie[];
}