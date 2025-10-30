
import React from "react";
import { useLoaderData } from "react-router-dom";

interface RecordType {
  name: string;
  salary: number;
}

// Define the structure of each record (from your loader)
interface RecordType {
  name: string;
  salary: number;
}

const ShowData1: React.FC = () => {
  // Tell TypeScript what type of data the loader returns
  const loaderData = useLoaderData() as RecordType[];

  return (
    <div className="App">
      <h3>Displaying Data from Loader Function</h3>

      {loaderData.map((rec, index) => (
        <div key={index}>
          <b>{rec.name}</b> — Salary: ${rec.salary}
          <br />
        </div>
      ))}
    </div>
  );
};

export default ShowData1;

