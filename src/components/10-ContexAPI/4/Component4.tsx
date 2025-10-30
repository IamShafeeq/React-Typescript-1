import React, { useContext } from "react";
import trainerNameContext from "./ContextData";

const Component4: React.FC = () => {
  // Access context value
  const { trainer } = useContext(trainerNameContext);

  return (
    <div style={{ backgroundColor: "#d3dcf5", padding: 20, width: 1000, marginTop: 10 }}>
      <h2>Component-4</h2>
      Trainer Name: <b>{trainer}</b>
    </div>
  );
};

export default Component4;
