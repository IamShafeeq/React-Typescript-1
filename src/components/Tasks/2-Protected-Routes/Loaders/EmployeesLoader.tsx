//Loader fetching data from API (with errorElement)
// types.ts

import type { LoaderFunctionArgs } from "react-router-dom";

 interface Employee{
  id: number;
  deptid: number;
  empno: number;
  name: string;
  salary: number
}

// loaders.ts
import { type LoaderFunction } from "react-router-dom";

 const dataFetch2: LoaderFunction = async ({ params }: LoaderFunctionArgs): Promise<Employee[]> => {
  const response = await fetch("http://localhost:3000/employees");
  if (!response.ok) {
    // Throwing a Response allows React Router to render errorElement
    throw new Response("Not Found", { status: 404 });
  }
  const employeeslist: Employee[] = await response.json();
  if (params.dept){
    console.log("->",params)
    
    //  const response = await fetch("http://localhost:3000/department");

    return  employeeslist.filter((rec)=> (rec.deptid==Number(params.dept)))
  }else{
    return employeeslist;
  }

  //return newemployees;
};
export default dataFetch2