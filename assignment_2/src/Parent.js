import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [childInput, setChildInput] = useState('');

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#e6f7ff',
      borderRadius: '10px',
      boxShadow: '0 0 10px #ccc',
      border: '2px solid #363030ff',
      margin: '2rem auto',
      maxWidth: '500px',
    }}>
      <h3>Parent Component</h3>
      <Child value={childInput} onChange={setChildInput} />
      <p>Value from Child: <strong>{childInput}</strong></p>
    </div>
  );
}

export default Parent;