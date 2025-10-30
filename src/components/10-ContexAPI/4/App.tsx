
//import { createContext } from "react"

/*
    1- createContext: 
        To inititate/create  Context API
    2- provider:
        - Provider will pass the data to use 
        - For update or provide data. who 
        - So who ever is making data avaliable to its childres they make provide 
            and stre data into provider
    3- useContext:
        We will usecontext where ever we are using or getting the data from provider
*/

import React from "react";
import Component1 from "./Component1";
import trainerNameContext from "./ContextData"
//import { createContext } from "react";

// Define the shape of the context value
export interface TrainerContextType {
  trainer: string;
}


const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#bcf5cf", padding: 10 }}>


      <h2>ContextAPI Example 1</h2>

      {/* Provider wraps the child component and provides the value */}

      <trainerNameContext.Provider value={{ trainer: "James Bond" }}>
        
        <Component1 />

      </trainerNameContext.Provider>
    </div>
  );
};

export default App;
