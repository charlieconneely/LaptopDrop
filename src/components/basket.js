import React, { Component } from 'react';
import '../App.css';
//import BasketItem from './items/basketItem';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from 'react-bootstrap/Card';
import { removeLaptopFromBasket } from '../store/actions/laptopActions'

class Basket extends Component {
  
  constructor(props) {
    super(props);
    this.removeFromBasket = this.removeFromBasket.bind(this);
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

  removeFromBasket = (id, uid) => {
    console.log("id selected: " + id);
    console.log("uid: " + uid);
    // set state id and basketID values
    this.state.id = id;
    // call redux function 
    this.props.removeLaptopFromBasket(this.state);
  }

  render() {
      const {laptops} = this.props;
      const {auth} = this.props;

      const BasketCard = ({laptop}) => {
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
              onClick={this.removeFromBasket.bind(this, laptop.id, auth.uid)}>Remove</button>
              <button className="btn blue lighten-1 z-depth-0">Checkout</button>
            </Card.Footer> 
        </Card>
        )
    }      

      const BasketItem = ({laptops}) => {

        return (
            <div>    
                {laptops && laptops.map(laptop => {              
                    return (
                        auth.uid === laptop.basketID ? 
                        <div className="container">
                          <BasketCard laptop={laptop} key={laptop.id} /> 
                        </div> : null
                    )
                })}
            </div>
        )         
    }

      return (   
        <div className="container">    
          <div className="row">         
          {/* need to filter through items for basketID(s) that match active UID  */}
            <BasketItem laptops={laptops}/>                 
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
    auth: state.firebase.auth
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeLaptopFromBasket: (laptop) => dispatch(removeLaptopFromBasket(laptop))
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