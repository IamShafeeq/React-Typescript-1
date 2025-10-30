import React, { useReducer } from "react";

// Define the structure of your state
type StateType = {
  name: string;
  salary: number;
};

// Define possible actions
type Action =
  | { type: "increase" }
  | { type: "decrease" };

// Initial state (type-safe)
const initialState: StateType = {
  name: "shafeeq",
  salary: 1000,
};

// Reducer function (with proper typing)
function myReducer(state: StateType, action: Action): StateType {
  console.log("Current name:", state.name);

  switch (action.type) {
    case "increase":
      return { ...state, salary: state.salary + 10 };

    case "decrease":
      return { ...state, salary: state.salary - 10 };

    default:
      return state
  }
}

// React component
const UseReducer3: React.FC = () => {
  const [state, dispatch] = useReducer(myReducer, initialState);

  return (
    <>
      <br />
      <h3>Name: {state.name}</h3>
      <h3>Salary: {state.salary}</h3>

      <button onClick={() => dispatch({ type: "increase" })}>
        Increment Salary
      </button>

      <button onClick={() => dispatch({ type: "decrease" })}>
        Decrement Salary
      </button>
    </>
  );
};

export default UseReducer3;
