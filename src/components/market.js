import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Row, Col, Container } from 'react-bootstrap';
import PreviewPicture from './previewPicture';
import { addLaptopToBasket, removeLaptopFromBasket } from '../store/actions/laptopActions';
import WaitingScreen from './WaitingScreen/waitingScreen'
import './WaitingScreen/waitingScreen.css';
import '../App.css';


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
      storage: null,
      screensize: null,
      id: null,
      basketID: null,
      imageURL: ''
    }
  }

  addToBasket = (id, price, uid) => {
    // set state id and basketID to values sent from button click
    this.setState({
      ...this.state,
      id: id,
      price: price,
      basketID: uid
    });
    // call redux function
    this.props.addLaptopToBasket(this.state);
  }

  removeFromBasket = (id, price, uid) => {
    // set state id and basketID values
    this.setState({
      ...this.state,
      id: id,
      price: price,
      basketID: null
    })
    // call redux function
    this.props.removeLaptopFromBasket(this.state);
  }

  render() {
    const {laptops} = this.props;
    const {auth} = this.props;
    const {asyncActionStatus} = this.props;

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
            <Row style={{justifyContent:'center', fontStyle:'normal'}}>{button}</Row>
            <hr />
          </Container>
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
        // if state var is false - display waitingScreen, else - display the page
        asyncActionStatus === false ? <WaitingScreen /> :
        <Container>
            <h3 className="center">Our Items</h3>
            <Row>
              <LaptopItem laptops={laptops}/>
            </Row>
        </Container>
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
    auth: state.firebase.auth,
    asyncActionStatus: state.laptop.asyncActionFinished
  }
}

// info on connect() - https://blog.logrocket.com/react-redux-connect-when-and-how-to-use-it-f2a1edab2013/
// compose impelemented to connect both state and firestore db to Market
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{collection: 'Laptops'}]))(Market);
