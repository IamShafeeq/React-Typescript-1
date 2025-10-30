import { useContext } from "react";
import UserContext from "./UserContext";

/*
Displays user details if logged in.
*/

const UserStatus = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{ marginTop: "1rem" }}>
      {user ? (
        <p>
          Logged in as <strong>{user.email}</strong>
        </p>
      ) : (
        <p>Not logged in.</p>
      )}
    </div>
  );
};

export default UserStatus;
