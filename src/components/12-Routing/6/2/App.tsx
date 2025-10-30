import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";

// Importing route components
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";

// Define all routes with proper typing
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Something went very wrong...</h1>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/shafeeq",
    element: <h2>Shafeeq is Back</h2>,
  },
];

// Create the router
const router = createBrowserRouter(routes);

// Main component
const Routes5: React.FC = () => {
  return (
    <div className="App">
      <h1>React Router Example</h1>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes5;
