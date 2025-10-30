import { createContext } from "react";

// Define the shape of the context value
export interface TrainerContextType {
  trainer: string;
}

const trainerNameContext = createContext<TrainerContextType>({
  trainer: "", // default value if no Provider is used
});

export default trainerNameContext;