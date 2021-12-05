import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const urliD = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const initialState = {
  list: [],
  loading: false,
  singleCockTailList: {},
};

export const fetchData = createAsyncThunk(
  "users/fetchCockTail",
  async (id = null) => {
    if (id === null) {
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
        return { data: newCocktails, id: null };
      }
    } else {
      const res = await axios.get(`${urliD}${id}`);
      const { drinks } = res.data;
      if (drinks) {
        const {
          idDrink,
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
          idDrink,
        };
        return { data: newCocktail, id: id };
      }
    }
  }
);

const cockTailSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
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
        if (payload.id === null) {
          state.loading = false;
          state.list = payload.data;
        } else if (payload.id !== null) {
          state.loading = false;
          state.singleCockTailList = payload.data;
          console.log(state.singleCockTailList);
        }
      })
      .addCase(fetchData.rejected, (state) => {
        console.log(state.error);
      });
  },
});

export const { setList } = cockTailSlice.actions;
export default cockTailSlice.reducer;