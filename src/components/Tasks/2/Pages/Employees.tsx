import React from "react";
import { useLoaderData } from "react-router-dom";

// The shape of the data coming from the loader
 interface Employee{
  id: number;
  deptid: number;
  empno: number;
  name: string;
  salary: number
}
const ShowData1: React.FC = () => {
  // useLoaderData returns unknown by default — we cast it to Employee[]
  const loaderData = useLoaderData() as Employee[];

  console.log("==========>", loaderData);

  return (
    <div >Employees
      {
        loaderData.map((rec) => (
          <div key={rec.id}>
            <b>{rec.name}</b>
            <br />
          </div>
        ))}
    </div>
  );
};

export default ShowData1;
