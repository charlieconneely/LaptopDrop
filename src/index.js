import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAh5jb_iwU-PrwCaBZu8ZZq8C5IZQLz6H4",
    authDomain: "itpracproject.firebaseapp.com",
    databaseURL: "https://itpracproject.firebaseio.com",
    projectId: "itpracproject",
    storageBucket: "itpracproject.appspot.com",
    messagingSenderId: "715044072048",
    appId: "1:715044072048:web:e9d02dd0252370592a62b5",
    measurementId: "G-CTYWZSJQ8C"
  };

  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
