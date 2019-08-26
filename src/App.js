import React from 'react';
import Clock from './components/Clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock date={new Date()} />
      </header>
    </div>
  );
}

export default App;
