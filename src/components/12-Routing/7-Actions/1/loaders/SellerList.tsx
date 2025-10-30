import React from "react";
import { useLoaderData } from "react-router-dom";

// Define the Seller type (should match API response)
interface Seller {
  id: number;
  firstName: string;
  surname: string;
  address: string;
  postcode: string;
  phone: string;
}

const SellerList: React.FC = () => {
  // useLoaderData typed as Seller[]
  const sellers = useLoaderData() as Seller[];

  return (
    <div>
      <h2>List of Sellers</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Surname</th>
            <th>Address</th>
            <th>Postcode</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller.id}>
              <td>{seller.firstName}</td>
              <td>{seller.surname}</td>
              <td>{seller.address}</td>
              <td>{seller.postcode}</td>
              <td>{seller.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerList;
