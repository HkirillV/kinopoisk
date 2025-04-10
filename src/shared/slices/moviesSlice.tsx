import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "@/shared/types/mediaTypes";

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