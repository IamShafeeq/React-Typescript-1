
/*

React Router provides a hook called useSearchParams() 
for handling query String.

*/
import React from "react";
import { useSearchParams } from "react-router-dom";

const UsersList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  /*
    What is useSearchParams()?

    It’s a React Router hook that helps you read and update query strings in the URL.
    Example URL:

    /users?sort=asc&page=2

    Here, the part after the ? — sort=asc&page=2 — is called a query string or search params.
    useSearchParams() lets you:
      -Read values like sort and page
      -Change them from your code — just like you’d change React state

      What it returns
        -useSearchParams() returns two things inside an array — just like React’s useState().  
        const [searchParams, setSearchParams] = useSearchParams();

  */
  const sort = searchParams.get("sort") || "asc";
  const page = Number(searchParams.get("page")) || 1;

  const handleNextPage = () => {
    setSearchParams({ sort, page: String(page + 1) });
  };

  return (
    <div>
      <h2>Users List Page</h2>
      <p>Sort Order: {sort}</p>
      <p>Current Page: {page}</p>

      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
};

export default UsersList;
