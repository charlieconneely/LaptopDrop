import React from 'react';
import './App.css';
import Login from './components/authentication/login';
import Home from './components/Home/home';
import Market from './components/market';
<<<<<<< HEAD
import Registration from './components/registration';
=======
import Registration from './components/authentication/registration';
>>>>>>> development
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/navbar';
import Footer from './components/Footer/footer';
import PostLaptop from './components/postLaptop';
import Basket from './components/basket';

import { Switch, Route, BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
<<<<<<< HEAD
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
                <li class="active"><a href="/">Home</a></li>
                <li><a href="/market">Market</a></li>
                <li><a href="#">Page 2</a></li>
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
    </Switch>
        </div>
      </BrowserRouter>
=======
    
      <div className="page-container">
        <div className="content-wrap">
          <BrowserRouter>
            <div className="App">
            
            <Navbar/>
        
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} /> 
                <Route path="/registration" component={Registration} /> 
                <Route path="/market" component={Market}/>
                <Route path="/postLaptop" component={PostLaptop}/>
                <Route path="/basket" component={Basket}/>
              </Switch>
            </div>
            
          </BrowserRouter>

        </div>
        <Footer />
      </div>
    
>>>>>>> development
    );
  }
}

export default App;
