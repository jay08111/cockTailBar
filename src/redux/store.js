import { configureStore } from "@reduxjs/toolkit";
import cockTailSlice from "./cockTailSlice";
export const store = configureStore({
  reducer: {
    states: cockTailSlice,
  },
});
