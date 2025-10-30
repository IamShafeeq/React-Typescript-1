import { createContext } from "react";

// Define the shape of the context value
export interface TrainerContextType {
  trainer: string;
  setTrainerName: (name: string) => void;
}

//Create context with default value
const trainerNameContext = createContext<TrainerContextType>({
  trainer: "Default Trainer",
  setTrainerName: () => {}, // default empty function
});

export default trainerNameContext;
