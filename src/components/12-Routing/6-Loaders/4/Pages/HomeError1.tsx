import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const HomeError1: React.FC = () => {
  const error = useRouteError();

  console.error(error); // Log full error details for debugging

  /*
  
  Check if the error is a RouteErrorResponse (e.g., thrown with "throw new Response(...)")

  What is isRouteErrorResponse?
  isRouteErrorResponse is a helper function provided by React Router.
  It helps you check whether the error caught by useRouteError()
  is a special type of error created by React Router, called a RouteErrorResponse.
  
  */

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Error Occurred</h1>
        <p>
          <strong>Status:</strong> {error.status}
        </p>
        <p>
          <strong>Message:</strong> {error.statusText || "Unknown error"}
        </p>
      </div>
    );
  }

  // Fallback for generic or unexpected errors
  return (
    <div>
      <h1>Unexpected Error</h1>
      <p>{(error as Error)?.message || "Something went wrong."}</p>
    </div>
  );
};

export default HomeError1;
