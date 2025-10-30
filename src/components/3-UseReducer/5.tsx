import React, { useReducer } from "react";

// Define the types
// State = string; // The state is just a string (trainer's name)
//type Action = number; // Action will be a number (1, 2, 3, 4)

// Reducer function
function myReducer(state: string, action: number): string {
  // action represents the numeric value we pass to dispatch()
  state=""
  switch (action) {
    case 1:
      return "Andy";
    case 2:
      return "Shafeeq";
    case 3:
      return "James";
    case 4:
      return "Peter";
    default:
      return "";
  }
}

// Component
const UseReducer5: React.FC = () => {
  // useReducer(reducerFunction, initialValue)
  const [trainer, dispatch] = useReducer(myReducer, "Un-Known");

  return (
    <>
      ----------------------------------------
      <br />
      <br />


      <h3>Trainer: {trainer}</h3>

      <button onClick={() => dispatch(1)}>Java</button> <br />
      <button onClick={() => dispatch(2)}>C#</button> <br />
      <button onClick={() => dispatch(3)}>HTML</button> <br />
      <button onClick={() => dispatch(4)}>SQL</button> <br />
      <button onClick={() => dispatch(5)}>Networking </button> <br />
      
    </>
  );
};

export default UseReducer5;
