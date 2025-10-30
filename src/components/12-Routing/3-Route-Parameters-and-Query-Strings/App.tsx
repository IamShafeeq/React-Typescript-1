import React from "react";
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Home from "./pages/HomePage";
import UsersList from "./pages/UsersList";
import UserDetail from "./pages/UserDetail";
import UserProfile from "./pages/UserProfile";

const App: React.FC = () => {
  return (
   
      <div style={{ padding: "20px" }}>
        <h1> 3-Route-Parameters-and-Query-Strings </h1>
        <BrowserRouter>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/users" style={{ marginRight: "10px" }}>Users List</Link>
          <Link to="/users/1" style={{ marginRight: "10px" }}>User Detail (1)</Link>
          <Link to="/users/2" style={{ marginRight: "10px" }}>User Detail (2)</Link>
          <Link to="/user-profile/10?tab=profile">User Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/user-profile/:id?" element={<UserProfile />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
        </BrowserRouter>
      </div>







  );
};

export default App;
