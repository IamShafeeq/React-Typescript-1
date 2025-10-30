/*

Redux is a global state of whole Application


npm  install @reduxjs/toolkit
npm install react-redux

Store:
Reducers:

useSelector:
useDispatch: // update store


the --createSlice() method is a utility function that helps simplfy the process of creating Redux slices.
 Slice i Redux represents a piece of the Redux store and include the -reduer function and -action related to that --state



to create a store configureStore() is used


*/
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./Store1";
import { deposit, withdraw } from "./BankSlices";

const BankComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const amount = useSelector((state: RootState) => state.bank.amount);

  return (
    <div>
      <h3>Bank Balance: {amount}</h3>
      <button onClick={() => dispatch(deposit())}>Deposit</button>
      <button onClick={() => dispatch(withdraw())}>Withdraw</button>
    </div>
  );
};

export default BankComponent;
