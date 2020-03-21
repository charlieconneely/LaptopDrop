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

  constructor(props) {
    super(props);
    this.replaceStateWithLaptop = this.replaceStateWithLaptop.bind(this);
    // id is only necessary field - consider removing the rest 
    this.state = {
      brandname:'',
      condition:'',
      memory:'',
      price: null,
      processor:'',
      ram: null,
      screensize: null,
      id: null,
      basketID: null
    }
  }

  replaceStateWithLaptop = (id, uid) => {
    console.log("id selected: " + id);
    console.log("uid: " + uid);
    // set state id to document id sent from button 
    this.state.id = id;
    this.state.basketID = uid;
    // call redux function 
    this.props.addLaptopToBasket(this.state);
  } 
  
  render() {
    const {laptops} = this.props;
    const {auth} = this.props;

    const LaptopCard = ({laptop}) => {

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
                <button className="btn blue lighten-1 z-depth-0" 
                        onClick={this.replaceStateWithLaptop.bind(this,laptop.id, auth.uid)}>Add to Cart</button>   
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
                      <LaptopCard laptop={laptop} key={laptop.id}/>
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
    laptops: state.firestore.ordered.Laptops,
    auth: state.firebase.auth
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