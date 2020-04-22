import React from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';
import '../../App.css';


class Login extends React.Component {

  state = {
    email:'',
    password:''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    const {authError} = this.props;
    const {auth} = this.props;
    // if user is signed in - redirect to home page
    if (auth.uid) return <Redirect to="/" />

    return (
      // Login page
      <Container>
        <Form className="white" onSubmit={this.handleSubmit}>

          <h5 className="grey-text text-darken-3">Login</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} value={this.state.email} type="email" id="email"></input>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} value={this.state.password} type="password" id="password"></input>
          </div>
          <div>
            <button className="btn blue lighten-1 z-depth-0" type="submit">Login</button>
            <div className="red-text">
              {/* if authentication error exists - display authentication error */}
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)