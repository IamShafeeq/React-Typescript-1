import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

const Main: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Routing</h1>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
