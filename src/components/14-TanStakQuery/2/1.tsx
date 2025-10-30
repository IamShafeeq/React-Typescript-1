// AppComponent1.tsx

import React from "react";
import { useQuery, QueryClient } from "@tanstack/react-query";


//Define the type for a Seller
interface Seller {
  id: number;
  firstName: string;
  surname: string;
}


const AppComponent1: React.FC = () => {
// useQuery with TypeScript generics
  const { data, isLoading, isError, refetch } = useQuery<Seller[]>({
    queryKey: ["sellers1"],
    enabled: false, // the query won't execute automatically
    queryFn: async (): Promise<Seller[]> => {
      const res = await fetch("http://localhost:3000/seller");
      if (!res.ok) {
        throw new Error("Failed to fetch sellers");
      }
      return res.json();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>  Error fetching sellers!</div>;
  }

  return (
    <div>
      <h1>TanStack Query - Fetching Data (Manual Trigger)</h1>

      <button onClick={() => refetch()}>Fetch Data</button>

      <div style={{ marginTop: "1rem" }}>
        {data?.map((rec) => (
          <div key={rec.id}>
            <b>
              {rec.id} - {rec.firstName} {rec.surname}
            </b>
          </div>
        ))}
      </div>
    </div>
  );
};


export default AppComponent1;
