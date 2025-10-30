import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const goToUsers = () => {
    navigate("/users");
  };

  return (
    <div>
      <h2>Welcome to the My Home Page</h2>
      <p>This is a simple React Router + TypeScript demo.</p>
      <button onClick={goToUsers}>Go to Users List</button>
    </div>
  );
};

export default HomePage;
