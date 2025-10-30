import React, { useState } from "react";

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  // Without useCallback
  const handleClick = () => setCount((prev) => prev + 1);

  // With useCallback
  // const handleClick = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <div>
        <b> Count:</b>{count}
        <Child onClick={handleClick} />
    </div>
    );
};


export default Parent