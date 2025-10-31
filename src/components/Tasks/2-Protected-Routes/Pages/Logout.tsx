import React from "react";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
  const navigate = useNavigate();
console.log("lll")
  // Define the logout function with an explicit return type
  const logout = (): void => {
    // Clear all local storage
    localStorage.clear();

    // Redirect to home page
    navigate("/");
  };

  return (
    <div>
      <button onClick={logout}>Click to Logout</button>
    </div>
  );
};

export default Logout;
