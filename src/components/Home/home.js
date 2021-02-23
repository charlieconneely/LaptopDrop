import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Button, Row } from 'react-bootstrap';
import {connect} from 'react-redux';
import '../../App.css';
import './home.css';

class Home extends React.Component {

  render() {
    const {auth} = this.props;
    const button = auth.uid ? <Link to="/market"><Button>BROWSE</Button></Link> : 
          <Link to="/login"><Button>GET STARTED</Button></Link>
    return (
      // Home page
      <div>      
        <Container>
          <Jumbotron>
            <h2>Welcome to Laptop-Drop</h2>
            <p>A place where you can browse, buy and sell second-hand laptops.</p>
      
            {button}
          </Jumbotron>
          <Row className="show-grid text-center"></Row>        
        </Container>
      </div>     
    );
  }
}

const mapStateToProps = (state) => {
  return {
      // access authentication status 
      auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Home);