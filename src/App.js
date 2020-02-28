import React from 'react';
import './App.css';
import Login from './components/authentication/login';
import Home from './components/home';
import Market from './components/market';
import Market2 from './components/market2';
import Registration from './components/authentication/registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/navbar';

import { Switch, Route, BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        
        <Navbar/>
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} /> 
            <Route path="/registration" component={Registration} /> 
            <Route path="/market" component={Market}/>
            <Route path="/market2" component={Market2}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
