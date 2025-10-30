import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

/*
interface RouteParams {
  id?: string;
}
*/


const UserProfile: React.FC = () => {
  const { id } = useParams()  as { id?: string };;
  const [searchParams] = useSearchParams();

  const tab = searchParams.get("tab") || "overview";

  return (
    <div>
      <h2>User Profile Page</h2>
      <p>User ID: {id || "Not specified"}</p>
      <p>Active Tab: {tab}</p>
    </div>
  );
};

export default UserProfile;
