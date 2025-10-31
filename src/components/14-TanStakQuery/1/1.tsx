import React from "react";
import {
  useQuery,
} from "@tanstack/react-query";


interface Seller {
  id: number;
  firstName: string;
  surname: string;
}


const fetchSellers = async (): Promise<Seller[]> => {
  const res = await fetch("http://localhost:3000/seller");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};











// Component using useQuery
const Main: React.FC = () => {

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery<Seller[]>({
    queryKey: ["sellers"],
    queryFn: fetchSellers,
    //staleTime: 1000 * 60 * 5, // 5 minutes (optional)
  });


  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <h2>TanStack Query - Reading Data..</h2>
      {isFetching && <p> Refreshing data in background...</p>}
      <ul>
        {data?.map((rec) => (
          <li key={rec.id}>
            <b>
              {rec.id}. {rec.firstName} {rec.surname}
            </b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
