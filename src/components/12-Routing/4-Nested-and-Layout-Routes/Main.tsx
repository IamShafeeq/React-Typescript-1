// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/HomePage";
import About from "./Pages/About";
import DashboardLayout from "./Pages/DashBoard/DashboardLayout";
import DashboardHome from "./Pages/DashBoard/DashboardHome";
import Profile from "./Pages/DashBoard/Profile";
import Settings from "./Pages/DashBoard/Settings";

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Nested route group */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} /> {/* /dashboard */}
          <Route path="profile" element={<Profile />} /> {/* /dashboard/profile */}
          <Route path="settings" element={<Settings />} /> {/* /dashboard/settings */}
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
