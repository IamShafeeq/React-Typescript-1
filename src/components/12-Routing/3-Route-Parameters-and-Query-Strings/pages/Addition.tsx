import React from "react";
import { useParams } from "react-router-dom";

const Addition: React.FC = () => {
  // Extract URL parameters
  const { num1, num2 } = useParams<{ num1: string; num2: string }>();

  // Convert to numbers safely
  const number1 = num1 ? parseFloat(num1) : 0;
  const number2 = num2 ? parseFloat(num2) : 0;

  // Compute sum
  const sum = number1 + number2;

  return (
    <div >
      <h2>Addition Result</h2>
      <p>
        {number1} + {number2} = <b{sum}</b>
      </p>
    </div>
  );
};

export default Addition;
