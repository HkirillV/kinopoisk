import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMediaElement } from "@/shared/types/mediaTypes";

export interface SeriesState {
  list: IMediaElement [];
}

export const initialState: SeriesState = {
  list: [],
}

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    addSeries: (state, action: PayloadAction<IMediaElement[]>) => {
      state.list = action.payload;
    }
  }
})

export const {addSeries} = seriesSlice.actions;
export default seriesSlice.reducer;