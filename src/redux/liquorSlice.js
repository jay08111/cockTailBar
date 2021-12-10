import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const url = "https://www.thecocktaildb.com/api/json/v1/1";
// const url_KEY = process.env.REACT_APP_PUBLIC_API;
// const urliD_KEY = process.env.REACT_APP_PUBLIC_API_SORT_BY_ID;
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const urliD = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const initialState = {
  list: [],
  loading: false,
  singleLiquorList: {},
  error: false,
  currentPage: 1,
  postPerPage: 8,
};
// console.log(url_KEY, urliD_KEY);
export const fetchData = createAsyncThunk(
  "users/fetchLiquor",
  async (id = null) => {
    if (id === null) {
      const res = await axios.get(url);
      const { drinks } = res.data;
      if (drinks) {
        const newLiquors = drinks.map((item) => {
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
    } else if (id !== null) {
      const res = await axios.get(urliD);
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
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
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

export const { setList, setPage, setCurrentPage } = liquorSlice.actions;
export default liquorSlice.reducer;
