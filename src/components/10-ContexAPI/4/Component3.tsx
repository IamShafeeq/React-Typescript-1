import React, { useContext } from "react";
import Component4 from "./Component4";
import trainerNameContext from "./ContextData";

const Component3: React.FC = () => {
  // Access the context value
  const { trainer } = useContext(trainerNameContext);

  return (
    <div style={{ backgroundColor: "#e2f40b", padding: 20, width: 1000 }}>
      <h2>Component-3</h2>
      Trainer: <b>{trainer}</b>
      <Component4 />
    </div>
  );
};

export default Component3;
