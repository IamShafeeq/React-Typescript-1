// Import LoaderFunction type if using with react-router-dom
import { type LoaderFunction } from "react-router-dom";

/*

What is LoaderFunction?

LoaderFunction is a TypeScript type for loader functions. It defines the signature that a loader function should have.
Input: It receives a LoaderFunctionArgs object, which contains:

params — route parameters
- request — the Request object (like Fetch API)
- context — optional extra data passed to the loader
- Output: It should return either:

The data you want the route component to use (any type)
Or throw a Response to trigger an errorElement

*/

// Define a TypeScript interface for your data
interface RecordType {
  name: string;
  salary: number;
}

// Loader function typed for react-router-dom
 const loadingData1: LoaderFunction = (): RecordType[] => {
  const records: RecordType[] = [
    { name: "Shafeeq", salary: 2000 },
    { name: "James", salary: 14000 },
  ];

  return records;
};

export default loadingData1