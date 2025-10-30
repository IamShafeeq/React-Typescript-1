import React, { useState } from "react";

/*
The React useMemo Hook returns a memoized value.
This version does NOT use useMemo.
*/

const UseMemo1: React.FC = () => {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // Normal function to calculate sum (will be called on every render)
  const sum = (): number => {
    console.log("Calculating sum...!");
    return number1 + number2;
  };

  return (
    <div className="App">
      

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
      <p>Sum: {sum()}</p>
      <br />
      <button onClick={() => setCount(count + 1)}>Counting</button>

      {/* Clicking the count button will also call sum() because the component re-renders */}
      <br />
      Count: {count}
    </div>
  );
};

export default UseMemo1;
