import { useContext } from "react";
import UserContext from "./UserContext";

const WelcomeMessage = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{ marginTop: "1rem" }}>
      {user ? (
        <h2>Welcome, {user.name}!</h2>
      ) : (
        <h2>Please log in to continue.</h2>
      )}
    </div>
  );
};

export default WelcomeMessage;
