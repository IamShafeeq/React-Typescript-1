import { UserProvider } from "./UserContext";

import WelcomeMessage from "./WelcomeMessage";
import LoginControl from "./LoginControl";
import UserStatus from "./UserStatus";

const App = () => {
  return (
    <UserProvider>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Global User Context Demo</h1>
        <WelcomeMessage />
        <UserStatus />
        <LoginControl />
      </div>
    </UserProvider>
  );
};

export default App;
