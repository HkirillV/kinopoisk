import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Movie = {
  id: number;
  name: string;
}

type MoviesState = {
  list: Movie[];
}

const initialState: MoviesState  = {
  list: [],
}

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<Movie[]>) => {
      state.list = action.payload;
    }
  }
})

export const {addMovies} = moviesSlice.actions;

export default moviesSlice.reducer;