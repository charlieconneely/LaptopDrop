import React, { Component } from 'react';
//import { Helmet } from 'react-helmet';
import '../App.css';
//import firebase from '../fbConfig';
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
    // https://www.youtube.com/watch?v=DyavQ5Q015U&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=19
    laptops: state.firestore.ordered.Laptops
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'Laptops'}
  ])
)(Market);