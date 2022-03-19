import { configureStore } from "@reduxjs/toolkit";
import liquorSlice from "./liquorSlice";
export const store = configureStore({
  reducer: {
    liquor: liquorSlice,
  },
});
