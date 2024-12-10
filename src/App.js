import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'nes.css/css/nes.min.css';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={ <Home /> }
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
