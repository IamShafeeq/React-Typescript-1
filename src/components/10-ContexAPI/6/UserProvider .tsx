import {useState} from "react";
import UserContext,{type User} from "./UserContext";
import ChildComponent from "./LoginControl"

const HomeComponent = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = (newUser: User) => setUser(newUser);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      <ChildComponent/>
    </UserContext.Provider>
  );
};

export default HomeComponent;