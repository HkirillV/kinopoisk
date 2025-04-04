import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "@/shared/slices/moviesSlice";

const store = configureStore({
  reducer: {
    movies: moviesSlice,
  }
})

export default store;