import { createSlice } from '@reduxjs/toolkit';

export interface ICartModalState {
  isCartOpen: boolean;
  isCartMounted: boolean;
}

const initialState: ICartModalState = {
  isCartOpen: false,
  isCartMounted: false,
};

const cartModal = createSlice({
  name: 'cartModal',
  initialState,
  reducers: {
    openCartModal: (state) => {
      state.isCartOpen = true;
    },
    closeCartModal: (state) => {
      state.isCartOpen = false;
    },
    toggleOpenCartModal: (state) => {
      state.isCartOpen = !state.isCartMounted;
    },

    unmountCartModal: (state) => {
      state.isCartMounted = false;
    },
    toggleMountCartModal: (state) => {
      state.isCartMounted = !state.isCartMounted;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  openCartModal,
  closeCartModal,
  toggleOpenCartModal,
  unmountCartModal,
  toggleMountCartModal,
} = cartModal.actions;

export default cartModal.reducer;
