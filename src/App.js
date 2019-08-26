import React from 'react';
import Clock from './components/Clock';
import './App.css';

function App() {
  const date = setInterval(new Date(), 1000);
  return (
    <div className="App">
      <header className="App-header">
        <Clock date={date} />
      </header>
    </div>
  );
}

export default App;
