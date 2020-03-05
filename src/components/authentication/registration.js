import React from 'react';
import { Helmet } from 'react-helmet';
import '../../App.css';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authActions'

class Registration extends React.Component {

  state = {
    email:'',
    password:''
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    const {auth} = this.props;
    const {authError} = this.props; // unused
    // if user is signed in - redirect to home page
    if (auth.uid) return <Redirect to="/"/>

    return (
      // Registration page
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>

          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input onChange={this.handleChange} type="text" name="firstName"></input>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={this.handleChange} type="text" name="lastName"></input>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} value={this.state.email} type="email" id="email"></input>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} value={this.state.password} type="password" id="password"></input>
          </div>
          <div>
            <button className="btn blue lighten-1 z-depth-0" type="submit">Sign Up</button>
          </div>
        </form>
        <Helmet>
          <style>{'body { background-color: #DAD9D8; }'}</style>        
        </Helmet>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)