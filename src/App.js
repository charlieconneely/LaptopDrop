import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

          {/* Add navbar with login/reg on the right and make it look nice*/}
               
        <Navbar bg="danger" variant="light">
          <Navbar.Brand href="#home">Options</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              
              <Nav.Link href="/login">Login/reg</Nav.Link>
            </Nav>
          </Navbar>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/login" component={Login} /> */}
      </Switch>

    </BrowserRouter>
  );
}

export default App;
