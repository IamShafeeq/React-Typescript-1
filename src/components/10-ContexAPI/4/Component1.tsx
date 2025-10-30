import React from "react";
import Component2 from "./Component2"

// Component1 using Component2
const Component1: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#42b8f3", padding: 20 }}>
      <h2>Component-1</h2>
      <Component2  />
    </div>
  );
};

export default Component1;
