import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface cartList {
  value: number[];
}
const initialState: cartList = {
  value: [],
};

export const cartListSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.value.push(action.payload);
    },
  },
});

export const { add } = cartListSlice.actions;
export default cartListSlice.reducer;
