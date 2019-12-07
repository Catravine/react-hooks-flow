import React from 'react';
import './App.css';
import MyComp from './components/MyComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComp><div>Hi</div></MyComp>
        <MyComp name="Blammo"></MyComp>
      </header>
    </div>
  );
}

export default App;
