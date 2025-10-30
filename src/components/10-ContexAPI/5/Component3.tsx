import React, { useContext } from "react";
import Component4 from "./Component4";
import trainerNameContext from "./ContextData";

const Component3: React.FC = () => {
  // Access context value and setter
  const { trainer, setTrainerName } = useContext(trainerNameContext);

  return (
    <div style={{ backgroundColor: "#e2f40b", padding: 20, width: 1000, marginTop: 10 }}>
      <h2>Component-3</h2>

      Trainer: <b>{trainer}</b>

      <br />

      {/* Dropdown to change trainer */}
      <select onChange={(event) => setTrainerName(event.target.value)}>
        <option value="Andy Smith">Andy Smith</option>
        <option value="Jordan H">Jordan H</option>
        <option value="Shafeeq">Shafeeq</option>
        <option value="Cameron">Cameron</option>
      </select>

      {/* Render Component4 */}
      <Component4 />
    </div>
  );
};

export default Component3;
