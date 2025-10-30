import React from "react";
import { useLoaderData,Outlet } from "react-router-dom";

// The shape of the data coming from the loader
export interface Departments {
  id: number;
  deptname: string;
  location: string
}

const ShowData1: React.FC = () => {
  // useLoaderData returns unknown by default — we cast it to Seller[]
  
  
  const departmentList = useLoaderData() as Departments[];

  //console.log("==========>", loaderData);

  return (
    <div >

      {
        departmentList.map((rec) => (
          <div key={rec.id}>
            <b>{rec.deptname}</b>
            <br />
          </div>
        ))}
        (
          <Outlet/>
        )
    </div>
  
    
  );
};

export default ShowData1;
