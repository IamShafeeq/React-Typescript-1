import React from "react";
import Component3 from "./Component3";

const Component2: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#9182f0", padding: 20, marginTop: 10 }}>
      <h2>Component-2</h2>
      <Component3 />
    </div>
  );
};

export default Component2;
