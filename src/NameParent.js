import React, { useState } from "react";
import NameChild from "./NameChild";

function NameParent() {
  const [name, setName] = useState("Chandradeep Kumar Raj");

  return (
    <div style={{ border: "2px solid #000000ff", padding: "10px", margin: "10px" }}>
      <h1>Q1: Passing Name from Parent to Child</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={{
          padding: "8px",
          marginBottom: "10px",
          width: "200px"
        }}
      />

      
      
      <NameChild userName={name} />
    </div>
  );
}

export default NameParent;
