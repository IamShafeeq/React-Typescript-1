
import {
  useQuery,
} from "@tanstack/react-query";


interface Employee {
  id: number;
  firstName: string;
  surname: string;
}


export const Employees = () => {
const fetchData = async () => {
return await fetch("http://localhost:80820/employees")
.then(response => response.json() as Promise<Array<Employee>>);
}
const {
    data: employees,
    isLoading,
    isError,
    error
} = useQuery <Array<Employee>>({
    queryKey: ["employees"],
    queryFn: fetchData
})

return (
    <div>
        <h2>Employees 1234</h2>
        ==({isError})
        <br/>
        {isLoading && <div>Loading...</div>}
        {isError && (
            <div>
                <h3>Couldn't load data</h3>
                <p>{error.message}</p>
            </div>
        )}
        {employees?.length ? (
            <>
                {employees.map(employee => (
                    <div key={employee.id} className="mb-1">{employee.name}, £{employee.salary}</div>
                ))}
            </>
        ) : (
            <>
                {!isLoading && <p>No employees are registered to this department</p>}
            </>
        )}
    </div>
)

}

export default Employees