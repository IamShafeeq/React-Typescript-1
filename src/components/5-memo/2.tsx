


/*

Memoization

Default behaviour
React normally re-renders a component whenever its parent re-renders.

*/

import React, { useState,memo } from "react";
import Child1 from "./ChildComponent1";

/*

type propstype={
    value:number
}
const Child = memo(( props:propstype) => {
  console.log("Child rendered");
  return <p>Child Value: {props.value}</p>;
});

*/

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Parent Count:: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Parent</button>
      <Child1 value={10} />
    </div>
  );
};

export default App;
