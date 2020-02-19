import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and SAVE to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
