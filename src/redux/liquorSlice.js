import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "nanoid";
import { reviewData } from "../data";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const urliD = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
export const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return (cart = JSON.parse(localStorage.getItem("cart")));
  } else {
    return [];
  }
};
const initialState = {
  list: [],
  loading: false,
  singleLiquorList: {},
  error: false,
  currentPage: 1,
  postPerPage: 8,
  reviewList: reviewData,
  reviewNameValue: "",
  reviewCommentValue: "",
  clickLike: false,
  cart: getLocalStorage(),
  disable: false,
};

export const fetchData = createAsyncThunk("users/fetchLiquor", async () => {
  const res = await axios.get(url);
  const { drinks } = res.data;
  if (drinks) {
    const newLiquors = drinks.slice(0, 24).map((item) => {
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
    return newLiquors;
  }
});
export const fetchSingleData = createAsyncThunk(
  "users/fetchSingleLiquor",
  async (id) => {
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
      return newLiquors;
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
    setReviewValue: (state, action) => {
      state.reviewNameValue = action.payload;
    },
    setCommentValue: (state, action) => {
      state.reviewCommentValue = action.payload;
    },
    setDisable: (state, action) => {
      state.disable = action.payload;
    },
    addReviews: (state) => {
      if (state.reviewNameValue && state.reviewCommentValue) {
        const newValue = {
          id: nanoid(),
          name: state.reviewNameValue,
          review: state.reviewCommentValue,
          like: 0,
        };
        state.reviewList = [...state.reviewList, newValue];
        state.reviewNameValue = "";
        state.reviewCommentValue = "";
      }
    },
    deleteReviews: (state, { payload }) => {
      state.reviewList = state.reviewList.filter((item) => item.id !== payload);
    },
    addItemToCart: (state, { payload }) => {
      const id = state.list.map((item) => item.id);
      const findItemId = id.find((item) => item === payload);
      const findItemById = state.list.find((item) => item.id === findItemId);
      if (findItemId === payload) {
        const newCartItem = { ...findItemById, amount: 1 };
        state.cart = [...state.cart, newCartItem];
      }
    },
    deleteCartItem: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    deleteCartItemAll: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.list = payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.error = true;
      })
      .addCase(fetchSingleData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.singleLiquorList = payload;
      })
      .addCase(fetchSingleData.rejected, (state) => {
        state.error = true;
      });
  },
});

export const {
  setList,
  setCurrentPage,
  setReviewValue,
  addReviews,
  setCommentValue,
  deleteReviews,
  addItemToCart,
  deleteCartItem,
  deleteCartItemAll,
} = liquorSlice.actions;
export default liquorSlice.reducer;
