import { createSlice } from "@reduxjs/toolkit";
import defaultItems from "./defaultItems";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items:
      window.localStorage.getItem("products") === null
        ? defaultItems
        : JSON.parse(window.localStorage.getItem("products")),
    money:
      window.localStorage.getItem("money") === null
        ? 100000000000
        : parseInt(window.localStorage.getItem("money")),
    diffMoney: 0,
    total: 0,
    status: "idle",
  },
  reducers: {
    buyProperty: (state, action) => {
      let addedItem = state.items.find((item) => item.id === action.payload.id);
      if (addedItem) {
        state.diffMoney =
          parseInt(action.payload.amount) * parseInt(action.payload.price);
        state.money -= state.diffMoney;
        state.total += state.diffMoney;
        addedItem.amount += action.payload.amount;
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    sellProperty: (state, action) => {
      let addedItem = state.items.find((item) => item.id === action.payload.id);
      if (addedItem) {
        state.diffMoney =
          parseInt(action.payload.amount) * parseInt(action.payload.price);
        state.money += state.diffMoney;
        addedItem.amount -= action.payload.amount;
        if (addedItem.amount - action.payload.amount === 0) {
          state.items = state.items.filter(
            (item) => item.title !== addedItem.title
          );
        } else {
          addedItem.amount -= action.payload.amount;
        }
      }
    },
  },
});

export const { buyProperty, sellProperty } = productsSlice.actions;

export default productsSlice.reducer;
