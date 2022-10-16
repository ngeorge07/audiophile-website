import { createSlice } from '@reduxjs/toolkit';
import { ICartItemData } from '../../lib/products/types';

export interface ICartLogicState {
  cartItems: ICartItemData[];
  amount: number;
  total: number;
}

const initialState: ICartLogicState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartLogic = createSlice({
  name: 'cartLogic',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    addItem: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (!cartItem) {
        state.cartItems.push(payload);
      }
    },
    increment: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem) {
        cartItem.itemQuantity += 1;
      }
    },
    decrement: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem) {
        cartItem.itemQuantity -= 1;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.itemQuantity;
        total += item.itemQuantity * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
    incrementByAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem) {
        cartItem.itemQuantity += payload.initialQuantity;
      }
    },
  },
});

export const {
  addItem,
  increment,
  decrement,
  calculateTotals,
  clearCart,
  incrementByAmount,
} = cartLogic.actions;

export default cartLogic.reducer;
