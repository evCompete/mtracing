import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome</h1>
              <p>Missoula Osprey Racing</p>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <h1>About Us</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
