import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  pastaList: [],
  loading: false,
};

export const fetchData = createAsyncThunk("users/fetchPasta", async () => {
  const res = await axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );
  return res.data;
});

const allStatesSlice = createSlice({
  name: "states",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.loading = true;
        state.pastaList = payload;
        console.log(state.pastaList);
      })
      .addCase(fetchData.rejected, (state, { payload }) => {
        console.log(state.error);
      });
  },
});

export const { bah } = allStatesSlice.actions;
export default allStatesSlice.reducer;
