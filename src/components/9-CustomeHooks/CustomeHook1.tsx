import { useState } from "react";

/*
Custom Hook: useCounter
------------------------
Custom hooks are JavaScript functions that start with the word "use"
and can call other hooks if needed.

Rules for custom hooks:
- Only call hooks at the top level.
- Only call hooks from React function components or other custom hooks.
- Never call hooks inside loops, conditions, or nested functions.
*/

const useCounter = (initValue: number = 1, step: number = 1) => {
  // useState with a number type
  const [count, setCounter] = useState<number>(initValue);

  const increment = (): void => {
    setCounter((prevCount) => prevCount + step);
  };

  const decrement = (): void => {
    setCounter((prevCount) => prevCount - step);
  };

  // Return a typed object
  return { count, increment, decrement };
};

export default useCounter;
