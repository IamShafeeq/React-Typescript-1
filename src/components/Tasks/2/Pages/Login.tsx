import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login");
    console.log("Stored login:", login);
    if (login === "true") {
      navigate("/");
    }
  }, [navigate]); // include navigate as dependency

  const handleLogin = (): void => {
    localStorage.setItem("login", "true"); // store as string
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleLogin}>Click to Login</button>
    </div>
  );
};

export default Login;
