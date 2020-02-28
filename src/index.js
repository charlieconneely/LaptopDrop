import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './components/store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';

// redux is a central store of data 
// store will hold the complete state tree for the app
const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
