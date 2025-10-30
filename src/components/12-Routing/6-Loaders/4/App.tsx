import React from "react";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import Nav from "./Nav"
import ShowData1 from "./Pages/ShowData1";
import ShowData2 from "./Pages/ShowData2";
import loadingData1 from "./Loaders/DataLoader1"
import loadingData2 from "./Loaders/DataLoader2"
import HomeError1 from "./Pages/HomeError1";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "sampledata",
        element: <ShowData1 />,
        loader: loadingData1,
      },
      {
        path: "fetchdata1",
        element: <ShowData2 />,
        loader: loadingData2,
        errorElement: <HomeError1 />,
      }
    ],
  },
]);

const Routes9: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes9;
