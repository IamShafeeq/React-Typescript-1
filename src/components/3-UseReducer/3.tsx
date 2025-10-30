import React, { useReducer } from "react";

// Define types for state and actions
//type State = number;

type Action =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "inc"; payload: number }
  | { type: "dec"; payload: number };

// Define reducer function with proper typing
const reducer = (state: number, action: Action)=> {
  console.log(state, action);

  switch (action.type) {
    case "increment":
    case "decrement":
    case "inc":
    case "dec":
      return state + action.payload;

    default:
      return state;
  }
};

// Component definition
const UseReducer0: React.FC = () => {
  const [data, dispatch] = useReducer(reducer, 10);

  return (
    <>
      <h3>The Data: {data}</h3>

      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment +1 (UseReducer0A)
      </button>

      <button onClick={() => dispatch({ type: "decrement", payload: -1 })}>
        Decrement -1 (UseReducer0A)
      </button>

      <button onClick={() => dispatch({ type: "inc", payload: 10 })}>
        Increment +10 (UseReducer0A)
      </button>

      <button onClick={() => dispatch({ type: "dec", payload: -10 })}>
        Decrement -10 (UseReducer0A)
      </button>
    </>
  );
};

export default UseReducer0;
