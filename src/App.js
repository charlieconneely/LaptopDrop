import React from 'react';
import './App.css';
import Login from './components/login';
import Home from './components/home';
import Market from './components/market';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar bg="danger" variant="light">
            {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link >Options </Nav.Link>
                
                <Nav.Link href="/login">Login/Register</Nav.Link>
                <Nav.Link href="/market"> Market</Nav.Link>
              </Nav>
            </Navbar>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} /> 
            <Route path="/market" component={Market}/>
          </Switch>
        </div>
      </BrowserRouter>   
    );
  }
}

export default App;
