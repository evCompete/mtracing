import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <h1>Welcome</h1>
            <p>Missoula Osprey Racing</p>
          </div>
        </Route>
        <Route path="/about">
          <div>
            <h1>About Us</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
{/* <div className="App">
  <header>
    <h1>Welcome </h1>
  </header>
  <main>
    <p>Missoula Osprey Racing</p>
  </main>
  <footer>
    <p>© 2024 Bonperworth Productions</p>
  </footer>
</div> */}