import React from "react";




import HomePage from "./Pages/HomePage"
import Employees from "./Pages/Employees"
import Department from "./Pages/Departments"
import Department2 from "./Pages/Departments2"

import emploader from "./Loaders/EmployeesLoader"
import deptloader from "./Loaders/DepartmentLoader"
import DepartmentForm from "./Pages/DepartmentForm"
import DepartmentAction from "./Actions/Department_Action"



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/departments",
        element: <Department/>,
        loader: deptloader,
        children:[
          {
            path: "emplist/:dept",
            element: <Employees />,
            loader: emploader,
          }
        
        ]
      },
      
      {
        path: "/allemployees",
        element: <Employees />,
        loader: emploader,
      },
      {
        path: "/newDepartment",
        element: <DepartmentForm />,
        action: DepartmentAction,
      },
      

    ],
  },
]);

const Routes9: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes9;
