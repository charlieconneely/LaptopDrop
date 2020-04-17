import authReducer from './authReducer'
import { combineReducers } from 'redux';
import laptopReducer from './laptopReducer';
import  { firestoreReducer } from 'redux-firestore'; 
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    laptop: laptopReducer,
    // syncing firestore data from firestoreReducer to firestore property in state 
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer