import React from 'react';  
import './App.css';
import HelloWorld from './HelloWorld';
import UserInfo from './UserInfo';
import ColoredSentence from './ColoredSentence';


function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <HelloWorld />

      <hr />

      <UserInfo />

      <hr />

      <ColoredSentence />
    </div>
  );
}

export default App;
