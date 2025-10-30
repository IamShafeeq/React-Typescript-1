import React, { useState } from "react";


/*

Default behaviour
React normally re-renders a component whenever its parent re-renders.

*/
type propstype={
    value:number
}
const Child = ( props:propstype) => {
  console.log("Child rendered");
  return <p>Child Value: {props.value}</p>;
};

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Parent Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Parent</button>
      <Child value={10} />
    </div>
  );
};

export default App;
