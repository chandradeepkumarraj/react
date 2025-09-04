import React, { useState } from "react";
import CounterChild from "./CounterChild";

function CounterParent() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ border: "2px solid #000000ff", padding: "10px", margin: "10px" }}>
      <h1>Q2: Counter with Increment & Decrement</h1>
      <h2>Current Count: {count}</h2>
      <CounterChild onIncrement={increment} onDecrement={decrement} />
    </div>
  );
}

export default CounterParent;