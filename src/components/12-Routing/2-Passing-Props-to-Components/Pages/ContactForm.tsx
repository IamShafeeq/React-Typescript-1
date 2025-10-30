import React from "react";

import { useNavigate } from "react-router-dom";

const ContactForm: React.FC = () => {
const navigate = useNavigate();
    const formSubmited = () => {
    navigate("/formSubmited");
  };

  return (
    <div>
      <h2>Please Fill The Form</h2>
      <p>Your Name:<input/></p>
      <p>Your Email:<input/></p>
      <button onClick={formSubmited}>Submit</button>
    </div>
  );
};

export default ContactForm