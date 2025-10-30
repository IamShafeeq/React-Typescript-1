import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Nav.css"; // Import your CSS file


const Nav: React.FC = () => {
  return (
    <div className="navbar">
      
      <ul>
        <li>
          <Link to="/departments">Departments</Link>
        </li>
        <li>
          <Link to="/allemployees"> All Employees </Link>
        </li>
        <li>
          <Link to="/newDepartment">New Department</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        
        
        
      </ul>

      {/* Renders the matched child route component */}
      
      *****<Outlet />*****
    </div>
  );
};

export default Nav;
