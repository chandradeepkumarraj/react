import React, { useState } from "react";

function PasswordForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const passwordReg = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordReg.test(password)) {
      setError(
        "Password must be at least 8 characters, include a number and a special character"
      );
    } else {
      setError("");
      alert("Password is valid");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Q3. Password Validation Form</h2>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default PasswordForm;