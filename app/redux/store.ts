import { configureStore } from '@reduxjs/toolkit';
import cartListReducer from '../features/cartListSlice';

export const store = configureStore({
  reducer: {
    carList: cartListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
