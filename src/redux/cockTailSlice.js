import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  list: [],
  loading: false,
  showLess: false,
};

export const fetchData = createAsyncThunk("users/fetchCockTail", async () => {
  const res = await axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );
  return res.data.drinks;
});

const cockTailSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
    setShowLess: (state, action) => {
      state.showLess = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.loading = true;
        state.list = payload;
      })
      .addCase(fetchData.rejected, (state, { payload }) => {
        console.log(state.error);
      });
  },
});

export const { setShowLess } = cockTailSlice.actions;
export default cockTailSlice.reducer;
