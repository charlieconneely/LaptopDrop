import React from 'react';
import { Helmet } from 'react-helmet';
import '../../App.css';
import firebase from '../../firebase'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      email:'',
      password:''
    }
  }

  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{      
    }).catch((error)=> {
      console.log(error);
    })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      // Login page
      <div className="container">
        <form className="white">

          <h5 className="grey-text text-darken-3">Login</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} value={this.state.email} type="email" name="email"></input>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} value={this.state.password} type="password" name="password"></input>
          </div>
          <div>
            <button className="btn blue lighten-1 z-depth-0" type="submit" onClick={this.login}>Login</button>
          </div>
        </form>
        <Helmet>
          <style>{'body { background-color: #DAD9D8; }'}</style>        
        </Helmet>
      </div>
    );
  }
}

export default Login;