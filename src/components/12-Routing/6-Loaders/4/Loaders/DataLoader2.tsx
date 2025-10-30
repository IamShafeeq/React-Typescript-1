//Loader fetching data from API (with errorElement)
// types.ts
export interface Employee {
  id: number;
  firstName: string;
  surname: string;
  address: string;
  postcode: string;
  phone: string;
}

// loaders.ts
import { type LoaderFunction } from "react-router-dom";

 const dataFetch2: LoaderFunction = async (): Promise<Employee[]> => {
  const response = await fetch("http://localhost:3000/seller");

  if (!response.ok) {
    // Throwing a Response allows React Router to render errorElement
    throw new Response("Not Found", { status: 404 });
  }

  const Employeelist: Employee[] = await response.json();
  return Employeelist;
};

export default dataFetch2