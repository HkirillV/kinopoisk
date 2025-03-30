import { createSlice } from "@reduxjs/toolkit";

type Movie = {
  id: number;
  title: string;
}

type MoviesState = {
  movies: Movie[];
}

const initialState: MoviesState  = []

const moviesSlices = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.push(action.payload);
    }
  }
})

export const {addMovies} = moviesSlices.actions;

export default moviesSlices.reducer;