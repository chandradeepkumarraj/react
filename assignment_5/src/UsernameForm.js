import React, { useState } from "react";

function UsernameForm() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("Username is required");
    } else {
      setError("");
      alert(`Username submitted: ${username}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Q1. Username Validation Form</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default UsernameForm;