import React from "react";
import { useLoaderData,Link,Outlet } from "react-router-dom";

// The shape of the data coming from the loader
export interface Seller {
  id: number;
  deptname: string;
  location: string
}

const ShowData1: React.FC = () => {
  // useLoaderData returns unknown by default — we cast it to Seller[]
  const loaderData = useLoaderData() as Seller[];

  console.log("==========>", loaderData);

  return (
        <div>
        {loaderData.map((rec) => (
            <div key={rec.id}>
            <b>

                <Link to={`/departments/emplist/${rec.id}`}>{rec.deptname}</Link>
                
            </b>
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
