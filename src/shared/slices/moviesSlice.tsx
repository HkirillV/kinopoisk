import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMediaElement } from "@/shared/types/mediaTypes";

export interface MoviesState {
  list: IMediaElement [];
}

export const initialState: MoviesState = {
  list: [],
}

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<IMediaElement[]>) => {
      state.list = action.payload;
    }
  }
})

export const {addMovies} = moviesSlice.actions;

export default moviesSlice.reducer;