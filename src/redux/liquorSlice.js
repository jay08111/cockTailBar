import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const urliD = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const initialState = {
  list: [],
  loading: false,
  singleLiquorList: {},
  error: false,
};

export const fetchData = createAsyncThunk(
  "users/fetchLiquor",
  async (id = null) => {
    if (id === null) {
      const res = await axios.get(url);
      const { drinks } = res.data;
      if (drinks) {
        const newLiquors = drinks.slice(0, 12).map((item) => {
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
        return { data: newLiquors, id: null };
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
        const newLiquors = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
          idDrink,
        };
        return { data: newLiquors, id: id };
      }
    }
  }
);

const liquorSlice = createSlice({
  name: "liquor",
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
          state.singleLiquorList = payload.data;
        }
      })
      .addCase(fetchData.rejected, (state) => {
        state.error = true;
      });
  },
});

export const { setList } = liquorSlice.actions;
export default liquorSlice.reducer;
