import React, { useReducer } from "react";

// Define the State type (object instead of number)
type State = {
  count: number;
};

// Define the Action types — what kind of updates we can perform
type Action =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "reset" };

// Reducer function (type-safe)

const reducer = (state: State, action: Action): State => {
  console.log("Action received:", action);

  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };

    case "decrement":
      return { count: state.count - action.payload };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
};

// Component
const UseReducerObject: React.FC = () => {
  // useReducer returns [state, dispatch]
  const [state, dispatch] = useReducer(reducer, { count: 10 });

  return (
    <>
      <h2>Current Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment +1
      </button>

      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
     Decrement -1
      </button>

      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment +10
      </button>

      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement -10
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default UseReducerObject;
