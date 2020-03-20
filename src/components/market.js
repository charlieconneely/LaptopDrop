import React, { Component } from 'react';
import '../App.css';
//import LaptopItem from './items/laptopItem';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from 'react-bootstrap/Card';

class Market extends Component {
  
  render() {
    const {laptops} = this.props;

    const LaptopItem = ({laptops}) => {
      return (
          <div>    
              {laptops && laptops.map(laptop => {              
                  return (
                      <Card style={{textAlign: "center"}}>
                          <Card.Header>{laptop.brandname}</Card.Header>
                          <Card.Body>
                              <blockquote className="blockquote mb-0">
                                  Cost: €{laptop.price}<br/>
                                  Storage: {laptop.memory} <br/>
                                  Resolution: {laptop.screensize} <br/>
                                  RAM: {laptop.ram} GB <br/>
                                  Processor: {laptop.processor} <br/>
              
                                  <footer className="blockquote-footer">
                                      Condition: {laptop.condition}
                                  </footer>
                              </blockquote>
                          </Card.Body>
                          <Card.Footer><button>Add to Basket</button></Card.Footer>
                      </Card> 
                  )
              })}
          </div>
      )         
  }

    return (   
        <div className="container">    
            <h3 className="center">Our Items</h3>
            <div className="row">          
              <LaptopItem laptops={laptops}/> 
            </div>      
        </div>
      ); 
    }
  }

const mapStateToProps = (state) => {
  console.log(state);
  return {
    // map laptops const to Laptops collection in firestore
    laptops: state.firestore.ordered.Laptops
  }
}

// info on connect() - https://blog.logrocket.com/react-redux-connect-when-and-how-to-use-it-f2a1edab2013/
// compose impelemented to connect both state and firestore db to Market 
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'Laptops'}
  ])
)(Market);