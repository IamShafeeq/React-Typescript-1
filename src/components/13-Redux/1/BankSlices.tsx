import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface AmountState {
  amount: number;
}

// Create an initial state with that type
const initialState: AmountState = {
  amount: 10,
};

// Create the slice with typed reducers
const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    deposit: (state) => {
      state.amount += 1;
    },
    withdraw: (state) => {
      state.amount -= 1;
    },
    // Optional: reducer with payload
    updateAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
});

// Export actions and reducer
export const { deposit, withdraw, updateAmount } = amountSlice.actions;
export default amountSlice.reducer;
