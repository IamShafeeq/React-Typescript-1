import { useState } from "react";

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useCounter = (initValue: number = 1, step: number = 1): UseCounterReturn => {
  const [count, setCount] = useState<number>(initValue);

  const increment = (): void => {
    setCount((prevCount) => prevCount + step);
  };

  const decrement = (): void => {
    setCount((prevCount) => prevCount - step);
  };

  return { count, increment, decrement };
};

export default useCounter;
