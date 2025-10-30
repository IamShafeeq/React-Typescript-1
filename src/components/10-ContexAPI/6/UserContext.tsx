import { createContext, useState } from "react";
import type { ReactNode } from "react";

// Define user type
export type User = {
  name: string;
  email: string;
};

// Define context shape
type UserContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

// Create context with default empty value
const UserContext = createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

// Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (newUser: User) => setUser(newUser);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
