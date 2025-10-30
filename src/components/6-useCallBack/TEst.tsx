import { useState ,useCallback,memo} from "react";

const Child = memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child rendered");
  return (
    <>
        <b> Hello from Child</b>
    </>
  )
});

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {alert("hello")},[])

  return (
    <div>
        <b> Count:</b>{count}
        <Child onClick={handleClick} />
        <button onClick={() => setCount(count + 1)}>Increment </button>

    </div>
    );
};


export default Parent