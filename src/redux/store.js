import { configureStore } from "@reduxjs/toolkit";
import allStatesSlice from "./allStatesSlice";
export const store = configureStore({
  reducer: {
    states: allStatesSlice,
  },
});
