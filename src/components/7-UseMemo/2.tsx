import React, { useState, useMemo } from "react";

/*
The React useMemo Hook returns a memoized value.
Think of memoization as caching a value so that it does not need to be recalculated.

The basic purpose of the useMemo is to cache the return value of a function and only 
recompute it when the dependencies specified in the second argument of the useMemo call change.

The useMemo Hook only runs when one of its dependencies update.
This can improve performance.

The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns 
a memoized value and useCallback returns a memoized function. 
*/

const UseMemo2: React.FC = () => {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // Function to calculate sum
  const calculatingsum = (): number => {
    console.log("Calculating sum...!");
    return number1 + number2;
  };

  // Memoize the sum so it only recalculates when number1 or number2 changes
  const sum = useMemo(calculatingsum, [number1, number2]);

  return (
    <div className="App">
      <h1>useMemo Hook</h1>

      <br />
      Number1:
      <input
        type="number"
        value={number1}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNumber1(Number(e.target.value))
        }
      />
      <br />
      Number2:
      <input
        type="number"
        value={number2}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNumber2(Number(e.target.value))
        }
      />

      <br />
      <p>Sum: {sum}</p>
      <br />
      <button onClick={() => setCount(count + 1)}>Counting</button>

      {/* Clicking the count button does NOT recalculate sum because useMemo caches it */}
      <br />
      Count: {count}
    </div>
  );
};

export default UseMemo2;
