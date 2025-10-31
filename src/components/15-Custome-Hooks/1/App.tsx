import React from "react";
import useCounter from "./CustomeHook1";

const UseCustomHook1: React.FC = () => {

  
  const { count, increment, decrement } = useCounter(102, 100);

  return (
    <>
      <h2>Custom Hook</h2>

      <p>The value of count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default UseCustomHook1;
