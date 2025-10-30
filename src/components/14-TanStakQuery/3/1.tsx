// AppComponent1.tsx

import React from "react";
import {
  useMutation,
} from "@tanstack/react-query";

//Define the type for the Seller data
interface Seller {
  id?: number; // optional since server usually assigns it
  firstName: string;
  surname: string;
}


const AppComponent1: React.FC = () => {
  //useMutation with TypeScript generic type
  const {
    mutate,
    isPending,
    isError,
    error,
    isSuccess,
  } = useMutation<Seller, Error, Seller>({
    // mutationFn is required and must return a Promise
    mutationFn: async (newSeller: Seller): Promise<Seller> => {
      const res = await fetch("http://localhost:3000/seller", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSeller),
      });

      if (!res.ok) {
        throw new Error("Failed to save new seller");
      }

      return res.json();
    },
  });

  if (isPending) {
    return <div> Saving seller...</div>;
  }

  if (isError) {
    return <div> Error: {error?.message}</div>;
  }

  return (
    <div>
      <h1>TanStack Query - POST Data Example</h1>

      <button
        onClick={() =>
          mutate({ firstName: "James", surname: "Bond" })
        }
      >
        Save Data
      </button>

      {isSuccess && <p>Seller saved successfully!</p>}
    </div>
  );
};

export default AppComponent1;
