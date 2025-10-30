import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ margin: "10px", display: "flex", gap: "15px" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
