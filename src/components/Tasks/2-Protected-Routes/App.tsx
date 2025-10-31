import React from "react";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import HomePage from "./Pages/HomePage"
import Employees from "./Pages/Employees"
import Department from "./Pages/Departments"
import Department2 from "./Pages/Departments2"

import emploader from "./Loaders/EmployeesLoader"
import deptloader from "./Loaders/DepartmentLoader"
import DepartmentForm from "./Pages/DepartmentForm"
import DepartmentAction from "./Actions/Department_Action"
import Login from "./Pages/Login"
import Logout from "./Pages/Logout"
import ProtectedRoute  from "./Pages/ProtectedRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "departments",
        element: <ProtectedRoute Component={Department2}/>,
        loader: deptloader,
        children:[
          {
            path: "emplist/:dept",
            element: <ProtectedRoute Component={Employees} />,
            loader: emploader,
          }
        
        ]
      },
      
      {
        path: "/allemployees",
        element: <ProtectedRoute Component={Employees}/>,
        loader: emploader,
      },
      {
        path: "/newDepartment",
        element: <ProtectedRoute Component={DepartmentForm}/>,
        action: DepartmentAction,
      },
      {
        path: "/login",
        element: <Login/>
        
      },
      {
        path: "/logout",
        element: <Logout/>
        
      },
      
      
      

    ],
  },
]);

const Routes9: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes9;
