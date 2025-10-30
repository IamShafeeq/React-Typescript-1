import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import QA from "./components/QA"
import Shafeeq from "./components/Shafeeq"
import Home from "./components/Home"
import NotFound  from "./components/NotFound"
const Main: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Routing</h1>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/qa" element={<QA/>} />
          <Route path="/Shafeeq" element={<Shafeeq/>} />
          <Route path="/trainer" element={<Shafeeq/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
