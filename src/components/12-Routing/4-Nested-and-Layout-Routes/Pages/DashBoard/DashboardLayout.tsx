
import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <aside style={{ width: "200px", backgroundColor: "#f4f4f4", padding: "10px" }}>
        <h3>Dashboard Menu</h3>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/dashboard/profile">Profile</Link></li>
            <li><Link to="/dashboard/settings">Settings</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "20px" }}>
        {/* 👇 The child routes will render here */}
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
