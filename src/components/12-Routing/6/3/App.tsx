import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
//import Services from "./pages/Services";

// Define routes with full type safety
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Something went very wrong...</h1>,
  },
  {
    path: "/profile",
    children: [
      {
        index: true,
        element: <h2>Profile Home Page..</h2>,
      },
      {
        path: "about", // child routes should not start with '/'
        element: <About />,
      },
      {
        path: "settings",
        element: <div>Settings Component</div>,
      },
      {
        path: "account",
        element: <div>Account Component</div>,
      },
    ],
  },
  {
    path: "/trainers",
    children: [
      {
        index: true,
        element: <h2>Trainers Home Page</h2>,
      },
      {
        path: "shafeeq", //  no leading '/'
        element: <h2>Shafeeq teaches SQL and PL/SQL</h2>,
      },
      {
        path: "john", //  no leading '/'
        element: <h2>John teaches Java Programming</h2>,
      },
    ],
  },
];

// Create the router
const router = createBrowserRouter(routes);

// Component definition
const Routes7: React.FC = () => {
  return (
    <div className="App">
      <h1>React Router Example</h1>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes7;
