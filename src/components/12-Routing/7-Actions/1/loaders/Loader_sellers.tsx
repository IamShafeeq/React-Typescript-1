 interface Seller {
  id: number;
  firstName: string;
  surname: string;
  address: string;
  postcode: string;
  phone: string;
}

// loaders.ts


 const Sellers = async (): Promise<Seller[]> => {
  const response = await fetch("http://localhost:3000/seller");

  if (!response.ok) {
    throw new Error("Failed to fetch sellers");
  }

  const sellers: Seller[] = await response.json();
  return sellers;
};


export default Sellers