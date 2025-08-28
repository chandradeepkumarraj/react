import React from 'react';
import Counter from './Counter';
import UserForm from './UserForm';
import Parent from './Parent';

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <UserForm />
      <hr />
      <Parent />
    </div>
  );
}

export default App;