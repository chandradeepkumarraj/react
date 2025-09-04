import React, { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const styles = {
    form: {
      padding: '2rem',
      backgroundColor: '#fff0f5',
      borderRadius: '10px',
      boxShadow: '0 0 10px #ccc',
      border: '2px solid #e404bbff',
      maxWidth: '400px',
      margin: '20px auto',
    },
    input: {
      display: 'block',
      margin: '1rem 0',
      padding: '0.5rem',
      width: '100%',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    output: {
      marginTop: '1rem',
      fontSize: '1.1rem',
      color: '#242134ff',
    },
  };

  return (
    <div style={styles.form}>
      <h3> User Form</h3>
      <input
        style={styles.input}
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        style={styles.input}
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div style={styles.output}>
        <p>👤 Name: <strong>{name}</strong></p>
        <p>📧 Email: <strong>{email}</strong></p>
      </div>
    </div>
  );
}

export default UserForm;