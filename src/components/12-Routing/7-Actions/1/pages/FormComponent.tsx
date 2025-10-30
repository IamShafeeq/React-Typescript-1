


import React from 'react';
import { Form, useActionData } from 'react-router-dom';

function FormComponent() {
    const data=useActionData();
  return (
    <div>
      <h1> Buyyer Information</h1>
      <pre> first and and sur name can be less then 10 character</pre>
      <Form method="POST" >
      First Name: <input type="text" name="firstname"/> <br/>
      SurName: <input type="text" name="surname"/> <br/>
      <button> Submit </button>  <br/>
      </Form>
    {data && data.error && <p> { data.error}</p>}
    </div>
  );
}

export default FormComponent;




