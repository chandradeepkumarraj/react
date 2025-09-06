import React from "react";

function CounterChild({ onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={onIncrement} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}

export default CounterChild;
