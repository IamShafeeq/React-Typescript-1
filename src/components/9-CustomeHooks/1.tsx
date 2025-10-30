import React from "react";
import useCounter from "./CustomeHook1";

/*
This component uses a custom hook `useCounter`
and displays buttons to increment and decrement the counter.
*/

const UseCustomHook1: React.FC = () => {
  // Destructure values returned from the custom hook
  const { count, increment, decrement } = useCounter(2, 100);

  return (
    <>
      <h2>Custom Hook Example</h2>
      <p>The Value of Count: {count}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </>
  );
};

export default UseCustomHook1;
