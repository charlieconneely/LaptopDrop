import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';

class Login extends React.Component {



  render() {
    return (
      // Login page
      <div>
        <h1>Welcome to the login page</h1>
        <br/>
        <h3>Please enter your login details below:</h3>
        <br/>
        <p>Username: </p> <input type="text" name="username" value="john123"></input> {/* test data */}
        <p>Password: </p> <input type="password" name="password"></input>
        <Helmet>
          <style>{'body { background-color: #00ffff; }'}</style>        
        </Helmet>
      </div>
    );
  }
}

export default Login;