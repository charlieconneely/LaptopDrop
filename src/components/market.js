import React, { Component } from 'react';
import '../App.css';
import LaptopItem from './items/laptopItem';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Market extends Component {
  
  render() {
      const {laptops} = this.props;

      return (   
        <div className="container">    
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