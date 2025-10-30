// AppComponent1.tsx

import React from "react";
import {

  useQuery,
} from "@tanstack/react-query";

// Define the data type returned from the API
interface Seller {
  id: number;
  firstName: string;
  surname: string;
}


//  Main component that fetches data
const AppComponent1: React.FC = () => {
  // useQuery automatically handles caching, refetching, etc.
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Seller[], Error>({
    queryKey: ["sellers1"],
    queryFn: async (): Promise<Seller[]> => {
      const res = await fetch("http://localhost:3000/seller");
      if (!res.ok) {
        throw new Error("Failed to fetch sellers");
      }
      return res.json();
    },
    // Refetch every 4 seconds
    refetchInterval: 4000,
    staleTime: 5 * 1000, // optional: 5 seconds "freshness"
  });

  //  Loading state
  if (isLoading) {
    return <div> Loading sellers...</div>;
  }

  //  Error state
  if (isError) {
    return <div> Error: {error.message}</div>;
  }

  //  Data rendering
  return (
    <div>
      <h3>TanStack Query - Reading Data (React + TypeScript)</h3>

      <button
        onClick={() => refetch()}
        style={{ marginBottom: "1rem", padding: "0.5rem 1rem" }}
      >
         Refetch Now
      </button>

      {data && data.length > 0 ? (
        data.map((rec) => (
          <div key={rec.id}>
            <b>
              {rec.id}, {rec.firstName}, {rec.surname}
            </b>
          </div>
        ))
      ) : (
        <p>No sellers found.</p>
      )}
    </div>
  );
};

export default AppComponent1;
