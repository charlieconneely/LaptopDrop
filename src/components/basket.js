import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { removeLaptopFromBasket, initialiseTotal } from '../store/actions/laptopActions';
import { Row, Col, Container } from 'react-bootstrap';
import PreviewPicture from './previewPicture';
import '../App.css';

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
      storage: null,
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

      const BasketCard = ({laptop}) => {
        console.log("price: " + laptop.price);
        // TODO - re-style basket similar to that of market.js 
        return (
          <div className="laptopDetails">
            <Container >
              <Row>
                <Col style={{textAlign:'right'}}>
                  <PreviewPicture imageURL={laptop.imageURL}/>
                </Col>
                <Col>
                  <header>{laptop.brandname}</header>
                    
                  Cost: €{laptop.price}<br/> 
                  Storage: {laptop.memory} <br/>
                  Resolution: {laptop.screensize} <br/> 
                  Storage: {laptop.storage} <br/> 
                  Processor: {laptop.processor} <br/>  
                  <br/>
                  <footer className="blockquote-footer">
                      Condition: {laptop.condition} 
                  </footer>
                </Col>     
              </Row>
              <Row style={{justifyContent:'center', fontStyle:'normal'}}>
                <button className="btn red lighten-1 z-depth-0"
                onClick={this.removeFromBasket.bind(this, laptop.id, laptop.price, auth.uid)}>Remove</button>
              </Row>
              <hr />
            </Container>
          </div>
        )
    }      

      const BasketItem = ({laptops}) => {

        return (
            <div>    
                {laptops && laptops.map(laptop => {      
                    if (laptop.basketID === auth.uid && this.state.isInitialized === false) {              
                      var activePrice = parseFloat(laptop.price);       
                      this.state.initTotal += activePrice;
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