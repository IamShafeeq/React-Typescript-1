// AppComponent1.tsx

import React from "react";
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

//  Define a type for the Seller record
interface Seller {
  id?: number; // optional, as backend might auto-generate it
  firstName: string;
  surname: string;
}

const saveSeller = async (newSeller: Seller): Promise<Seller> => {
  const res = await fetch("http://localhost:3000/seller", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSeller),
  });
  if (!res.ok) {
    throw new Error("Failed to save new seller");
  }
  return res.json();
};

const AppComponent1: React.FC = () => {
  //  Access the QueryClient instance
  const queryClient = useQueryClient();

  //  useMutation with TypeScript generics
  const {
    mutate,
    isPending,
    isError,
    error,
    isSuccess,
  } = useMutation<Seller, Error, Seller>({
      mutationFn: saveSeller,
      onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sellers1"] });
    },
  });

  //  Loading and error states
  if (isPending) {
    return <div> Saving seller...</div>;
  }

  if (isError) {
    return <div> Error: {error?.message}</div>;
  }

  return (
    <div>
      <h1>TanStack Query - POSTING Data</h1>

      <button
        onClick={() =>
          mutate({ firstName: "James", surname: "Bond" })
        }
      >
        Save Data
      </button>

      <button
        onClick={() =>
          queryClient.invalidateQueries({ queryKey: ["sellers1"] })
        }
        className="ml-2"
      >
        Refetch the Data
      </button>

      {isSuccess && <p> Seller saved successfully!</p>}
    </div>
  );
};

export default AppComponent1;
