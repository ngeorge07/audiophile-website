import { createSlice } from '@reduxjs/toolkit';

export interface IBurgerModalState {
  isBurgerOpen: boolean;
  isBurgerMounted: boolean;
}

const initialState: IBurgerModalState = {
  isBurgerOpen: false,
  isBurgerMounted: false,
};

const burgerModal = createSlice({
  name: 'burgerModal',
  initialState,
  reducers: {
    openBurgerModal: (state) => {
      state.isBurgerOpen = true;
    },
    closeBurgerModal: (state) => {
      state.isBurgerOpen = false;
    },
    toggleOpenBurgerModal: (state) => {
      state.isBurgerOpen = !state.isBurgerMounted;
    },

    unmountBurgerModal: (state) => {
      state.isBurgerMounted = false;
    },
    toggleMountBurgerModal: (state) => {
      state.isBurgerMounted = !state.isBurgerMounted;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  openBurgerModal,
  closeBurgerModal,
  toggleOpenBurgerModal,
  unmountBurgerModal,
  toggleMountBurgerModal,
} = burgerModal.actions;

export default burgerModal.reducer;
