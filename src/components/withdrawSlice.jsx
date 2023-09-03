import { createSlice } from "@reduxjs/toolkit";
const initialState = { amount: "2500000" };

const withdrawSlice = createSlice({
  name: "withdraw",
  initialState,
  reducers: {
    withdrawTen: (state) => {
      state.amount = state.amount - 10000;
    },
    withdrawFive: (state) => {
      state.amount = state.amount - 5000;
    },
  },
});
export const { withdrawFive, withdrawTen } = withdrawSlice.actions;
export default withdrawSlice.reducer;
