import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  Component: React.ComponentType; // ✅ Type for a passed-in component
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login");
    console.log("---------------->", !login);

    if (!login) {
      navigate("/login");
    }
  }, [navigate]); // Added dependency

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
