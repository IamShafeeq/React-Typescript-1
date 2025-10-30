import React, { useRef } from "react";

const UseRef1: React.FC = () => {
  // Type the ref explicitly as HTMLInputElement or null
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEvent = () => {
    // Use optional chaining to safely access current
    const inputValue = inputRef.current?.value;

    if (inputValue !== undefined) {
      alert(inputValue);
    }
  };

  return (
    <div className="App">
      <h2>useRef Example</h2>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleEvent}>Click</button>
    </div>
  );
};

export default UseRef1;
