import React from "react";
import { useLoaderData } from "react-router-dom";

// The shape of the data coming from the loader
export interface Seller {
  id: number;
  firstName: string;
  surname: string;
  address: string;
  postcode: string;
  phone: string;
}

const ShowData1: React.FC = () => {
  // useLoaderData returns unknown by default — we cast it to Seller[]
  const loaderData = useLoaderData() as Seller[];

  console.log("==========>", loaderData);

  return (
    <div className="App">
      <h3>Displaying Data from Loader Function (Data coming from Fetch)</h3>

      {/* Display a message while data is being fetched */}
      {!loaderData || loaderData.length === 0 ? "Loading..." : "Done ✅"}

      {/* Safely render the fetched data */}
      {Array.isArray(loaderData) &&
        loaderData.map((rec) => (
          <div key={rec.id}>
            <b>{rec.firstName}</b>
            <br />
          </div>
        ))}
    </div>
  );
};

export default ShowData1;
