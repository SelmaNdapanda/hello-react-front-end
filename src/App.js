import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Greeting from './components/greeting';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
