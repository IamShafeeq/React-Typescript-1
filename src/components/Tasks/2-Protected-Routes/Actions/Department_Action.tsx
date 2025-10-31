import { redirect, type ActionFunctionArgs } from "react-router-dom";
// Type for the seller form submission
interface DepartmentFormData {
  deptname: string;
  location: string;
}
// Type for error response
interface ErrorResponse {
  error: string;
}
const SaveDepartment = async ({
  request,
}: ActionFunctionArgs): Promise<ErrorResponse | Response> => {
 const formData = await request.formData();
  console.log(formData)
  // Extract form data
  const departmentinfo: DepartmentFormData = {
    deptname: (formData.get("department") as string) || "",
    location: (formData.get("location") as string) || "",
  };

  console.log("Department:", departmentinfo);

  // Validate lengths
  if (departmentinfo.deptname.length < 3 || departmentinfo.location.length < 3) {
    const error: ErrorResponse = {
      error: "The length of any one of them is less than 3 characters",
    };
    return error;
  }
 // POST request to API
  const response = await fetch("http://localhost:3000/department", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(departmentinfo),
  });

  if (!response.ok) {
    throw new Error("Failed to save new Department");
  }

  console.log("Department Saved:", response);

  // Redirect after successful save
  return redirect("/departments");
};
export default SaveDepartment