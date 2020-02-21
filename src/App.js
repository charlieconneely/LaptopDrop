import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Home from './components/home';
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

          {/* Add navbar with login/reg on the right */}
               
        </header>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/login" component={Login} /> */}
      </Switch>

    </BrowserRouter>
  );
}

export default App;
