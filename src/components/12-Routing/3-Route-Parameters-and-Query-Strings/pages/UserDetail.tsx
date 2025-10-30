

/*

Explanation:
    -useParams() is a hook to access URL parameters.
    -It always returns a string-based object.
    -TypeScript helps us ensure the correct parameter name.

    Example:
    When you visit /users/2, useParams() returns { id: "2" }.
*/


// Define a TypeScript type for the route paramsimport React from "react";
import React from "react";
import { useParams } from "react-router-dom";

/*
 Define a type for route params


interface RouteParams {
  id: string;
}
*/

const UserDetail: React.FC = () => {
  const { id } = useParams()  as { id?: string };;

  return (
    <div>
      <h2>User Detail Page</h2>
      <p>User ID: {id}</p>
    </div>
  );
};

export default UserDetail;
