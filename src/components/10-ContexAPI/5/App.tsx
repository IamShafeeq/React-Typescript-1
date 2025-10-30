



/*

    1- createContext: 
        To inititate/create  Context API
    2- provider:
        - Provide will pass the data to use 
        - For update or provide data. who 
        - So who ever is making data avaliable to its children they make provide 
            and stre data into provider
    3- useContext:
        We will uecontext there ever we are using or getting the data from provider



*/

import React, { useState } from "react";
import Component1 from "./Component1";
import trainerNameContext from "./ContextData";

const App: React.FC = () => {
  // State for the trainer name
  const [trainer, setTrainer] = useState<string>("Trainer Name");

  // Setter function for context
  const setTrainerName = (name: string) => {
    setTrainer(name);
  };

  return (
    <div style={{ backgroundColor: "#bcf5cf", padding: 10 }}>
      <h2>ContextAPI Example 2</h2>

      {/*Dropdown to change trainer */}
      <select onChange={(event) => setTrainerName(event.target.value)}>
        <option value="Andy Smith">Andy Smith</option>
        <option value="Jordan H">Jordan H</option>
        <option value="Shafeeq">Shafeeq</option>
        <option value="Cameron">Cameron</option>
      </select>

      {/* Provide context to child components */}
      
      <trainerNameContext.Provider value={{ trainer, setTrainerName }}>
        <br />
        Trainer: <b>{trainer}</b>
        <Component1 />
      </trainerNameContext.Provider>
    </div>
  );
};

export default App;
