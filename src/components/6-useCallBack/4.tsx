import  { useState ,useCallback,memo} from "react";

const Child = memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child rendered");
  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  )
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  

  const handleClick = useCallback( () => setCount((prev) => prev + count2),[count2]);
  return (
    <div>
        <b> Count:</b>{count}
        <br/>
        <Child onClick={handleClick} />
       
        <b> Count2:</b>{count2} <button onClick={() => setCount2((prev) => prev + 1)}>Ok</button>

    </div>
    );
};

export default Parent