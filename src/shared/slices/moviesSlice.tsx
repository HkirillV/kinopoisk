import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IGenre {
  genre: string;
}

interface IMovie {
  kinopoiskId: number;
  nameRu: string;
  posterUrl: string;
  ratingKinopoisk: number;
  genres: IGenre[]
}

interface MoviesState {
  list: IMovie[];
}

const initialState: MoviesState = {
  list: [],
}

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.list = action.payload;
    }
  }
})

export const {addMovies} = moviesSlice.actions;

export default moviesSlice.reducer;