import React from "react";
import Header1 from "./Header";
import { Outlet } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header1 />
      outLet2:
      <div id="F1">
        <div id="F2"></div>

        <div id="F3">
          *********************************************************************
          <Outlet />
          ******************************************************************
        </div>

        <div id="F2"></div>
      </div>
    </div>
  );
};

export default HomePage;
