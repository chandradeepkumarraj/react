import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const styles = {
    container: {
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#f0f8ff',
      borderRadius: '10px',
      boxShadow: '0 0 10px #ccc',
      border: '5px solid #000000ff',
      margin: '20px auto',
      width: '300px'
    },
    count: {
      fontSize: '2rem',
      color: count >= 0 ? '#2e8b57' : '#dc143c',
      transition: 'color 0.3s ease',
    },
    button: {
      margin: '0.5rem',
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    },
    inc: { backgroundColor: '#4caf50', color: 'white' },
    dec: { backgroundColor: '#f44336', color: 'white' },

  };

  return (
    <div style={styles.container}>
      <h2 style={styles.count}>Count: {count}</h2>
      <button style={{ ...styles.button, ...styles.inc }} onClick={() => setCount(count + 1)}>
        ➕ Increment
      </button>
      <button style={{ ...styles.button, ...styles.dec }} onClick={() => setCount(count - 1)}>
        ➖ Decrement
      </button>
    </div>
  );
}

export default Counter;