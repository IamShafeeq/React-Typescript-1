interface Buyer {
  id: number;
  firstName: string;
  surname: string;
  address: string;
  postcode: string;
  phone: string;
}


// loaders.ts


export const Buyers = async (): Promise<Buyer[]> => {
  const response = await fetch("http://localhost:3000/buyer");

  if (!response.ok) {
    throw new Error("Failed to fetch buyers");
  }

  const buyers: Buyer[] = await response.json();
  return buyers;
};

export default Buyers