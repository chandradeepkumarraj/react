
import React from "react";
import UsernameForm from "./UsernameForm.js";
import EmailForm from "./EmailForm.js";
import PasswordForm from "./PasswordForm.js";
import AgeForm from "./AgeForm.js";
import ConfirmPasswordForm from "./ConfirmPasswordForm.js";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "blue" }}>React Form Validation</h2>
      <hr />
      <UsernameForm />
      <hr />
      <EmailForm />
      <hr />
      <PasswordForm />
      <hr />
      <AgeForm />
      <hr />
      <ConfirmPasswordForm />
    </div>
  );
}

export default App;