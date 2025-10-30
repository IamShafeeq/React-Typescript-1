
import React from "react";
import { useNavigate } from "react-router-dom";

interface ContactInfo {
  email: string;
  phone:number
}

const About: React.FC<ContactInfo> = ({ email,phone }) => {
  
  const navigate = useNavigate();
   const goToAbout = () => {
    navigate("/contactform");
  };
  return (
    <div>
      <h2>Contact us on:</h2>
      <p>Email:{email}</p>
      <p>Phone:{phone}</p>
      <button onClick={goToAbout}>Contact form</button>
    </div>
  );
};

export default About