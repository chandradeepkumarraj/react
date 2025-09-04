import React from 'react';

function Child({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Type in child..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: '0.5rem',
        borderRadius: '5px',
        border: '1px solid #888',
        width: '100%',
        marginBottom: '1rem',
      }}
    />
  );
}

export default Child;