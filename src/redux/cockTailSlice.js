import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const initialState = {
  list: [],
  loading: false,
  showLess: false,
};

export const fetchData = createAsyncThunk("users/fetchCockTail", async () => {
  const res = await axios.get(url);
  const { drinks } = res.data;
  if (drinks) {
    const newCocktails = drinks.map((item) => {
      const {
        idDrink,
        strDrink,
        strDrinkThumb,
        strAlcoholic,
        strGlass,
        strInstructions,
      } = item;
      return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass,
        description: strInstructions,
      };
    });
    return newCocktails;
  } else {
    return null;
  }
});

const cockTailSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
    setShowLess: (state, action) => {
      state.showLess = action.payload;
    },
    setList: (state, action) => {
      state.list = action.payload;
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

export const { setShowLess, setList } = cockTailSlice.actions;
export default cockTailSlice.reducer;
