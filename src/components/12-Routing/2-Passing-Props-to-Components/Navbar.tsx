import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const navStyle: React.CSSProperties = {
    margin: "10px",
    display: "flex",
    gap: "15px",
  };

  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
