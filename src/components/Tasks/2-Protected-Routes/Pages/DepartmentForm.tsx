


import React from 'react';
import { Form, useActionData } from 'react-router-dom';

function FormComponent() {
    const data=useActionData();
  return (
    <div>
      <h2> New Department</h2>
      <h3> Department and and Location can not be less then 3 character</h3>

      <Form method="POST" >
      Department: <input type="text" name="department"/> <br/>
      Location: <input type="text" name="location"/> <br/>
      <button> Submit </button>  <br/>
      </Form>
    {data && data.error && <p> { data.error}</p>}
    </div>
  );
}

export default FormComponent;




