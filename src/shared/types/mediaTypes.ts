export interface IGenre {
  name: string;
}

export interface IRating {
  imdb: number
}

export interface IPoster {
  url?: string
}

export interface IMediaElement {
  id: number,
  name?: string,
  alternativeName: string,
  type: string,
  poster?: IPoster,
  rating: IRating,
  genres: IGenre[]
}