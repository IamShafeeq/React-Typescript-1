import React from "react";

interface Info {
  about: string;
}

const About: React.FC<Info> = ({ about }) => {
  return (
    <div>
      <h2>About Us Page</h2>
      <p>{about}</p>
    </div>
  );
};

export default About