import React, { Component } from 'react';
import '../App.css';
//import LaptopItem from './items/laptopItem';
// import LaptopCard from './items/laptopCard';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from 'react-bootstrap/Card';
import { addLaptopToBasket } from '../store/actions/laptopActions';


class Market extends Component {

  state = {
    brandname:'',
    condition:'',
    memory:'',
    price: null,
    processor:'',
    prodID: null,
    ram: null,
    screensize: null
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addLaptopToBasket(this.state);
  }
  
  render() {
    const {laptops} = this.props;

    const LaptopCard = ({laptop}) => {
      {this.state.brandname = laptop.brandname}
      {this.state.prodID = laptop.prodID}
      {this.state.price = laptop.price}
      {this.state.memory = laptop.memory}
      {this.state.screensize = laptop.screensize}
      {this.state.ram = laptop.ram}
      {this.state.processor = laptop.processor}
      {this.state.condition = laptop.condition}
      return (
        <div className="container">
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
              <Card.Footer>
                <button className="btn blue lighten-1 z-depth-0" onClick={this.handleSubmit}>Add to Cart</button>
              </Card.Footer>  
          </Card>
          </div>
      )
  }

    const LaptopItem = ({laptops}) => {
      return (
          <div>    
              {laptops && laptops.map(laptop => {              
                  return (
                    <div className="container">
                      <LaptopCard laptop={laptop} key={laptop.prodID}/>
                    </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addLaptopToBasket: (laptop) => dispatch(addLaptopToBasket(laptop))
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
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {collection: 'Laptops'}
  ])
)(Market);