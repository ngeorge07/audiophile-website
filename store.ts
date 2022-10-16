import { configureStore } from '@reduxjs/toolkit';
import burgerModalReducer from './features/burger-modal/burgerModalSlice';
import cartModalReducer from './features/cart-modal/cartModalSlice';

export const store = configureStore({
  reducer: {
    cartModal: cartModalReducer,
    burgerModal: burgerModalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
