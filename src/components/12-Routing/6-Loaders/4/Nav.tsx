import React from "react";
import { Link, Outlet } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <div>
      
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sampledata"> Show Data 1 </Link>
        </li>
        <li>
          <Link to="/fetchdata1">Show Data 2</Link>
        </li>
      </ul>

      {/* Renders the matched child route component */}
      *****<Outlet />*****
    </div>
  );
};

export default Nav;
