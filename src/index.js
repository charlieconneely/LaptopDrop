import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore , reduxFirestore} from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './fbConfig';
import firebase from 'firebase/app';
import './index.css';   

// redux is a central store of data 
// store will hold the complete state tree for the app
const store = createStore(rootReducer,
    compose(
         applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
         reduxFirestore(firebase , fbConfig)
    )
);

const rrfProps = {
    firebase, 
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(<Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}><App /> </ReactReduxFirebaseProvider>
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
