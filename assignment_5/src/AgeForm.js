import React, { useState } from "react";

function AgeForm() {
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ageNum = Number(age);
    if (ageNum < 18 || ageNum > 60) {
      setError("Age must be between 18 and 60");
    } else {
      setError("");
      alert(`Age submitted is ${ageNum}`);
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
        <h2>Q4. Age Check Form</h2>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default AgeForm;