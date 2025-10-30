import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";

// Import your components
import HomePage from "./pages/HomePage";
import FormComponent from "./pages/FormComponent";
import SellerList from "./loaders/SellerList"

// Import your loaders & actions (already typed separately)
import  Sellers from "./loaders/Loader_sellers";
import  SaveSellerInformation  from "./actions/Action1";

// Define routes with strong typing
const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <h2>Welcome to Our Home Page</h2>,
      },
      {
        path: "sellers", // no leading slash for nested route
        loader: Sellers, // loader function
        element: <SellerList />,
      },
      {
        path: "form", // nested route path
        element: <FormComponent />,
        action: SaveSellerInformation, // form action
      },
    ],
  },
];


// Create the router
const router = createBrowserRouter(routes);

// Functional component typed as React.FC
const Routes9A: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes9A;
