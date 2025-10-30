//import { type LoaderFunctionArgs } from "react-router-dom";



/*
What is LoaderFunctionArgs?

LoaderFunctionArgs is a TypeScript type provided by React Router.

It represents the single argument passed to a loader function when a route is being loaded.

What it contains
LoaderFunctionArgs has the following properties:
Property	Type	                Description
params	    Record<string, string>	URL parameters, e.g., /properties/:type → params.type
request	    Request	                The native Request object representing the current HTTP request
context	    any	                    Optional context passed to the router (if you provide one)

*/

// Loader function
// export const propertyLoaders = async ({
//   params,
// }: LoaderFunctionArgs): Promise<Property[]> => {
//   console.log(params);

//   const response = await fetch("http://localhost:8082/property");
//   if (!response.ok) {
//     throw new Error("Failed to fetch properties");
//   }

//   const properties: Property[] = await response.json();

//   if (params.type === "sold") {
//     return properties.filter((property) => property.status === "SOLD");
//   } else if (params.type === "notsold") {
//     return properties.filter((property) => property.status === "FOR SALE");
//   }

//   return properties;
// };

// Define Property type
interface Property {
  id: number;
  address: string;
  postcode: string;
  type: string;
  price: number;
  bedroom: number;
  bathroom: number;
  garden: number;
  sellerId: number;
  status: "SOLD" | "FOR SALE";
  buyerId?: number; // optional
}

 const propertyLoaders = async (): Promise<Property[]> => {
  const response = await fetch("http://localhost:3000/property");

  if (!response.ok) {
    throw new Error("Failed to fetch Properties");
  }

  const sellers: Property[] = await response.json();
  return sellers;
};

export default propertyLoaders