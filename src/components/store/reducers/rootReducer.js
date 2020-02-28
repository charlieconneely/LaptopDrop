import authReducer from './authReducer'
import { combineReducers } from 'redux';
// laptopReducer page not made
// ref to make - https://www.youtube.com/watch?v=hOQ7x_X2gIg&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=11

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer