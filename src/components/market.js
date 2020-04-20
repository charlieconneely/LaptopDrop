import React, { Component } from 'react';
import '../App.css';
//import LaptopItem from './items/laptopItem';
// import LaptopCard from './items/laptopCard';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from 'react-bootstrap/Card';
import PreviewPicture from './previewPicture';
import { addLaptopToBasket, removeLaptopFromBasket } from '../store/actions/laptopActions';


class Market extends Component {

  constructor(props) {
    super(props);
    this.addToBasket = this.addToBasket.bind(this);
    this.removeFromBasket = this.removeFromBasket.bind(this);
    // id is only necessary field - consider removing the rest 
    this.state = {
      brandname:'',
      condition:'',
      memory:'',
      price: 0,
      processor:'',
      ram: null,
      screensize: null,
      id: null,
      basketID: null,
      imageURL: ''
    }
  }

  addToBasket = (id, price, uid) => {
    console.log("id selected: " + id);
    console.log("uid: " + uid);
    // set state id and basketID to values sent from button click
    this.state.id = id;
    this.state.price = price;
    this.state.basketID = uid;
    // call redux function 
    this.props.addLaptopToBasket(this.state);
  } 

  removeFromBasket = (id, price, uid) => {
    console.log("id selected: " + id);
    console.log("uid: " + uid);
    // set state id and basketID values
    this.state.id = id;
    this.state.price = price;
    this.state.basketID = null;
    // call redux function 
    this.props.removeLaptopFromBasket(this.state);
  } 
  
  render() {
    const {laptops} = this.props;
    const {auth} = this.props;

    const LaptopCard = ({laptop}) => {

      let button;
      // check if laptop item is already in the basket of the user
      // - display the appropriate button
      if (auth.uid !== laptop.basketID) {
        button = <button className="btn blue lighten-1 z-depth-0" 
        onClick={this.addToBasket.bind(this,laptop.id, laptop.price, auth.uid)}>Add to Cart</button>
      } else {
        button = <button className="btn red lighten-1 z-depth-0"
        onClick={this.removeFromBasket.bind(this, laptop.id, laptop.price, auth.uid)}>Remove</button>
      }

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

                      <PreviewPicture imageURL={laptop.imageURL}/>  
  
                      <footer className="blockquote-footer">
                          Condition: {laptop.condition} 
                      </footer>
                  </blockquote>
              </Card.Body>
              <Card.Footer>
                  {button}
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
                    auth.uid === laptop.basketID || laptop.basketID === null ?
                    <div className="container">
                       <LaptopCard laptop={laptop} key={laptop.id}/>
                    </div> : null
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
    addLaptopToBasket: (laptop) => dispatch(addLaptopToBasket(laptop)),
    removeLaptopFromBasket: (laptop) => dispatch(removeLaptopFromBasket(laptop))
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
  firestoreConnect([{collection: 'Laptops'}]))(Market);