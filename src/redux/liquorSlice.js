import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "nanoid";
import { reviewData, reviewDataKR } from "../data";
import { toast } from "react-toastify";
const url = "https://jay08111.github.io/data/liquor.json";
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
  postPerPage: 4,
  currentPosts: [],
  reviewList: reviewData,
  reviewListKR: reviewDataKR,
  reviewNameValue: "",
  reviewCommentValue: "",
  clickLike: false,
  cart: getLocalStorage(),
  selected: "all",
  category: [],
  filter: false,
  filteredList: [],
  ordinaryDrink: [],
  cockTail: [],
  shot: [],
  coffeeAndTea: [],
  punchAndParty: [],
  show: false,
  toggleLang: false,
  cartTotalEn: 0,
  cartTotalKr: 0,
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
        strCategory,
        price,
        priceKr,
        strInstructionsKR,
      } = item;
      return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass,
        description: strInstructions,
        category: strCategory,
        price,
        priceKr,
        descriptionKR: strInstructionsKR,
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
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setShow: (state, action) => {
      state.show = action.payload;
    },
    setToggledLang: (state, action) => {
      state.toggleLang = action.payload;
    },
    addReviews: (state) => {
      if (state.reviewNameValue && state.reviewCommentValue) {
        const newValue = {
          id: nanoid(),
          name: state.reviewNameValue,
          review: state.reviewCommentValue,
          like: 0,
          image: "https://i.ibb.co/0rnrj19/default-image.png",
        };
        if (state.toggleLang) {
          state.reviewListKR = [...state.reviewListKR, newValue];
        } else {
          state.reviewList = [...state.reviewList, newValue];
        }
        state.reviewNameValue = "";
        state.reviewCommentValue = "";
      } else if (!state.reviewNameValue && !state.reviewCommentValue) {
        if (state.toggleLang) {
          toast.error("입력을 해주세요 !");
        } else {
          toast.error("plase put something !");
        }
      } else if (!state.reviewNameValue) {
        if (state.toggleLang) {
          toast.error("이름을 입력해 주세요!");
        } else {
          toast.error("please put your name!");
        }
      } else if (!state.reviewCommentValue) {
        if (state.toggleLang) {
          toast.error("코멘트를 입력해 주세요!");
        } else {
          toast.error("please put your comment!");
        }
      }
    },
    deleteReviewsEN: (state, { payload }) => {
      state.reviewList = state.reviewList.filter((item) => item.id !== payload);
    },
    deleteReviewsKR: (state, { payload }) => {
      state.reviewListKR = state.reviewListKR.filter(
        (item) => item.id !== payload
      );
    },
    addItemToCart: (state, { payload }) => {
      const id = state.list.map((item) => item.id);
      const findItemId = id.find((item) => item === payload);
      const findItemById = state.list.find((item) => item.id === findItemId);
      if (findItemId) {
        const newCartItem = { ...findItemById, quantity: 1 };
        state.cart = [...state.cart, newCartItem];
      }
    },
    countTotal: (state) => {
      let { totalEn, totalKr } = state.cart.reduce(
        (acc, cur) => {
          const { quantity, price, priceKr } = cur;
          acc.totalEn = price * quantity;
          acc.totalKr = priceKr * quantity;
          return acc;
        },
        {
          totalEn: 0,
          totalKr: 0,
        }
      );
      state.cartTotalEn = totalEn;
      state.cartTotalKr = totalKr;
    },
    increaseAmount: (state, { payload }) => {
      const findCartId = state.cart.find((item) => item.id === payload);
      if (findCartId) {
        findCartId.quantity += 1;
      }
    },
    decreaseAmount: (state, { payload }) => {
      const findCartId = state.cart.find((item) => item.id === payload);
      if (findCartId) {
        if (findCartId.quantity === 1) {
        } else {
          findCartId.quantity -= 1;
        }
      }
    },
    deleteCartItem: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    deleteCartItemAll: (state) => {
      state.cart = [];
    },
    filterList: (state) => {
      state.filter = true;
      switch (state.selected) {
        case "all":
          state.filter = false;
          break;
        case "Ordinary Drink":
          const ordinaryDrink = state.ordinaryDrink.filter(
            (item) => item.category === "Ordinary Drink"
          );
          state.filteredList = ordinaryDrink;
          break;
        case "Cocktail":
          const cockTail = state.cockTail.filter(
            (item) => item.category === "Cocktail"
          );
          state.filteredList = cockTail;
          break;
        case "Shot":
          const shot = state.shot.filter((item) => item.category === "Shot");
          state.filteredList = shot;
          break;
        case "Coffee / Tea":
          const coffeeAndTea = state.coffeeAndTea.filter(
            (item) => item.category === "Coffee / Tea"
          );
          state.filteredList = coffeeAndTea;
          break;
        case "Punch / Party Drink":
          const punchandPartyDrink = state.punchAndParty.filter(
            (item) => item.category === "Punch / Party Drink"
          );
          state.filteredList = punchandPartyDrink;
          break;
        default:
          break;
      }
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
        state.category = [
          "all",
          ...new Set(state.list.map((item) => item.category)),
        ];
        state.filteredList = state.list;
        state.ordinaryDrink = state.list;
        state.cockTail = state.list;
        state.shot = state.list;
        state.coffeeAndTea = state.list;
        state.punchAndParty = state.list;
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
  setSelected,
  setFilter,
  setShow,
  setToggledLang,
  addReviews,
  setCommentValue,
  deleteReviewsEN,
  deleteReviewsKR,
  addItemToCart,
  deleteCartItem,
  deleteCartItemAll,
  filterList,
  handleAmount,
  countTotal,
  increaseAmount,
  decreaseAmount,
} = liquorSlice.actions;
export default liquorSlice.reducer;
