import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Crypto from './components/Crypto';
import Saved from './components/Saved';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/crypto" element={<Crypto />} />
          <Route path="saved" element={<Saved />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
