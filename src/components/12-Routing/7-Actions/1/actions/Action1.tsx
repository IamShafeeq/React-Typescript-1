import { redirect, type ActionFunctionArgs } from "react-router-dom";

// Type for the seller form submission
interface SellerFormData {
  firstName: string;
  surname: string;
}

// Type for error response
interface ErrorResponse {
  error: string;
}

/*

What is SaveSellerInformation?

SaveSellerInformation is a React Router v6.4+ “action function”.
In React Router:
Actions are functions that run when a form is submitted on a route.
They handle form submission, API calls, and can redirect the user after completion.
Actions are different from loaders — loaders fetch data to display, actions process data when a form is submitted.

*/

 const SaveSellerInformation = async ({
  request,
}: ActionFunctionArgs): Promise<ErrorResponse | Response> => {
  const formData = await request.formData();

  // Extract form data
  const sellerinfo: SellerFormData = {
    firstName: (formData.get("firstname") as string) || "",
    surname: (formData.get("surname") as string) || "",
  };

  console.log("Seller Info:", sellerinfo);

  // Validate lengths
  if (sellerinfo.firstName.length < 10 || sellerinfo.surname.length < 10) {
    const error: ErrorResponse = {
      error: "The length of any one of them is less than 10 characters",
    };
    return error;
  }

  // POST request to API
  const response = await fetch("http://localhost:3000/seller", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sellerinfo),
  });

  if (!response.ok) {
    throw new Error("Failed to save seller information");
  }

  console.log("Saved seller:", response);

  // Redirect after successful save
  return redirect("/sellers");
};


export default SaveSellerInformation