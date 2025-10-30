import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "./BankSlices"; // note: no .js needed in TS

// Create the store
export const store = configureStore({
  reducer: {
    bank: amountReducer,
  },
});

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export default store
export default store;
