type Datatype1={

  name1:string,
  department:string,

}

const EmployeeInfo=(props:Datatype1)=> {
  return (
    <>
      <h2> Employee Information Systems</h2>
      Name of the Employee:{props.name1} <br/>
      Addres of Employee :{props.department}
  </>
  )
}

export default EmployeeInfo;