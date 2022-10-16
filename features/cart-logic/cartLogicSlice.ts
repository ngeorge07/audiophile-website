import { createSlice } from '@reduxjs/toolkit';

export interface ICartLogicState {
  count: number;
}

const initialState: ICartLogicState = {
  count: 1,
};

const cartLogic = createSlice({
  name: 'cartLogic',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const { increment } = cartLogic.actions;

export default cartLogic.reducer;
