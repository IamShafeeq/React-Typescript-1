//Loader fetching data from API (with errorElement)
// types.ts

 interface Department{
  id: number;
  deptname: string;
  location: string
}

// loaders.ts
import { type LoaderFunction } from "react-router-dom";

 const dataFetch2: LoaderFunction = async (): Promise<Department[]> => {
  const response = await fetch("http://localhost:3000/department");

  if (!response.ok) {
    // Throwing a Response allows React Router to render errorElement
    throw new Response("Not Found", { status: 404 });
  }

  const deptlist: Department[] = await response.json();
  return deptlist;
};

export default dataFetch2