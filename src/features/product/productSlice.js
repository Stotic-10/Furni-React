import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/productsData";

const initialState = {
  products: products,
  cart: [],
  netTotal: 0,
  count: 0
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.cart[index].quantity += 1;
      } else {
        let product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
      }
      state.count = state.cart.length
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      state.count = state.cart.length

    },
    incrementProduct: (state, action) => {
      // console.log(action.payload);
      state.cart[action.payload].quantity += 1;
    },
    decrementProduct: (state, action) => {
      // console.log(action.payload);

      if (state.cart[action.payload].quantity > 1) {
        state.cart[action.payload].quantity -= 1;
      } else {
        state.cart.splice(action.payload, 1);
        state.count = state.cart.length
      }
    },

    getTotal: (state) => {
      state.netTotal = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    cartCount: (state) => {
      state.count = state.cart.length;
    }
  },
});

export const { addToCart, removeCart, incrementProduct, decrementProduct, getTotal, cartCount } = productSlice.actions;

export default productSlice.reducer;
