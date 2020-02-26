import React from 'react';
import './App.css';
import Login from './components/login';
import Home from './components/home';
import Market from './components/market';
import Market2 from './components/market2';
import Registration from './components/registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        
        {/* nav bar */}
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
              <div class="navbar-header">
                 {/* website name */}
                <a class="navbar-brand">PC MarketPlace</a>
              </div>
              <ul class="nav navbar-nav">
                 {/* links */}
                <li><a href="/">Home</a></li>
                <li><a href="/market">Laptops</a></li>
                <li><a href="/market2">PCs</a></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                 {/* login/reg */}
                <li><a href="/registration"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div>
          </nav>
          <Switch>
             {/* routes for links */}
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
