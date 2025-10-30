import { useContext } from "react";
import UserContext from "./UserContext";

const LoginControl = () => {
  const { user, login, logout } = useContext(UserContext);

  const handleLogin = () => {
    login({ name: "JAmes Bond", email: "James@Qa.com" });
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default LoginControl;
