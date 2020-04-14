import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Button, Row, Col, Image } from 'react-bootstrap';
import '../../App.css';
import './home.css';

class Home extends React.Component {

  render() {
    return (
      // Home page
      
      <Container>
        <Jumbotron>
          <h2>Welcome to PC Marketplace</h2>
          <p>A place where you can browse, buy and sell second-hand laptops.</p>

          <Link>
            <Button bsStyle="primary" className="button">About us</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center"></Row>
        {/* Implement carousel */}

      </Container>
      
    );
  }
}

export default Home;