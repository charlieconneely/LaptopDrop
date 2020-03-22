import React, { Component } from 'react';
import '../App.css';
//import BasketItem from './items/basketItem';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from 'react-bootstrap/Card';
import { removeLaptopFromBasket, initialiseTotal } from '../store/actions/laptopActions'

class Basket extends Component {
  
  constructor(props) {
    super(props);
    this.removeFromBasket = this.removeFromBasket.bind(this);
    this.initialiseTotal = this.initialiseTotal.bind(this);
    // id and price are only necessary fields - consider removing the rest 
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
      initTotal: 0,
      isInitialized: false
    }
  }

  removeFromBasket = (id, price, uid) => {
    console.log("id selected: " + id);
    console.log("uid: " + uid);
    // set state id and basketID values
    this.state.id = id;
    this.state.price = price;
    // call redux function 
    this.props.removeLaptopFromBasket(this.state);
  }

  initialiseTotal = (total) => {
    // initialise the totalprice in the state with the price of all items in the basket 
    this.props.initialiseTotal(total);
  }

  render() {
      const {laptops} = this.props;
      const {auth} = this.props;
      const {total} = this.props;
      var checkedItems = [];

      const BasketCard = ({laptop}) => {
        console.log("price: " + laptop.price);
        // console.log("totalPrice: " + this.totalPrice);
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
            <Card.Footer>
            <button className="btn red lighten-1 z-depth-0"
              onClick={this.removeFromBasket.bind(this, laptop.id, laptop.price, auth.uid)}>Remove</button>
            </Card.Footer> 
        </Card>
        )
    }      

      const BasketItem = ({laptops}) => {

        return (
            <div>    
                {laptops && laptops.map(laptop => {      
                    if (laptop.basketID === auth.uid && this.state.isInitialized === false) {                     
                      this.state.initTotal += laptop.price;
                      console.log("total: " + this.state.initTotal);
                      this.initialiseTotal(this.state.initTotal);
                    }        
                    return (
                        /* filter through items for basketID(s) that match active UID  */
                        auth.uid === laptop.basketID ? 
                        <div className="container">
                          <BasketCard laptop={laptop} key={laptop.id} /> 
                        </div> : null
                    )
                })}
                {this.state.isInitialized = true}
            </div>
        )         
    }

      return (   
        <div className="container">    
          <div className="row">         
            <BasketItem laptops={laptops}/>                 
            <h5>Total price: {total.totalPrice}</h5>
            <button className="btn blue lighten-1 z-depth-0">Checkout</button>
          </div>     
        </div>
      ); 
    }
  }

const mapStateToProps = (state) => {
  console.log(state);
  return {
    // map laptops const to Laptops collection in firestore
    laptops: state.firestore.ordered.Laptops,
    auth: state.firebase.auth,
    total: state.laptop
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeLaptopFromBasket: (laptop) => dispatch(removeLaptopFromBasket(laptop)),
    initialiseTotal: (total) => dispatch(initialiseTotal(total))
  }
}

// info on connect() - https://blog.logrocket.com/react-redux-connect-when-and-how-to-use-it-f2a1edab2013/
// compose impelemented to connect both state and firestore db to Basket 
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {collection: 'Laptops'}
  ])
)(Basket);