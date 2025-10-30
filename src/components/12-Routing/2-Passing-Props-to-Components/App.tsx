import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import ContactForm from "./Pages/ContactForm";
import FormSubmited from "./Pages/FormSubmited";

const Main: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About about="We are developers" />} />
        <Route
          path="/contact"
          element={<Contact email="info@qa.com" phone={123} />}
        />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/formSubmited" element={<FormSubmited />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
