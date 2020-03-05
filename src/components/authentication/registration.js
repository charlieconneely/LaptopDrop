import React from 'react';
import { Helmet } from 'react-helmet';
import '../../App.css';
import firebase from '../../fbConfig'

class Registration extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email:'',
      password:''
    }
  }

  // still need to set up signup function in redux store 
  // (similar to signup) 
  signup(e) {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error)=> {
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

          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input onChange={this.handleChange} type="text" id="firstName"></input>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={this.handleChange} type="text" id="lastName"></input>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} value={this.state.email} type="email" name="email"></input>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} value={this.state.password} type="password" name="password"></input>
          </div>
          <div>
            <button className="btn blue lighten-1 z-depth-0" type="submit" onClick={this.signup}>Sign Up</button>
          </div>
        </form>
        <Helmet>
          <style>{'body { background-color: #DAD9D8; }'}</style>        
        </Helmet>
      </div>
    );
  }
}

export default Registration;