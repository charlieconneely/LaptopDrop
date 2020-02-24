import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
// import firebase from 'firebase';
// import {firebaseConfig} from './index.js'; 
import * as firebase from 'firebase';

class Market extends React.Component {

  constructor() {
      super();
      this.state = {
          name: 'hp bla bla'
      };
  }

//   componentDidMount() {
//       const rootRef = firebase.database().ref().child('Laptops');
//       const nameRef = rootRef.child('name');
//       speedRef.on('value', snap => {
//           this.setState({
//             name: snap.val()
//           });
//       });
//   }

  render() {
    return (
      
      <div className="App">
          <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default Market;