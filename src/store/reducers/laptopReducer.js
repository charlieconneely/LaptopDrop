import { act } from "react-dom/test-utils";

const initState = {
    
}

const basketState = [];

const laptopReducer = (state = initState, action) => {
    if (action.type === 'POST_LAPTOP') {
        console.log('posted laptop', action.laptop);
        console.log(state);
        console.log("after state posted");
        return state;
    }
    else if (action.type === 'POST_LAPTOP_ERROR') {
        console.log('post laptop error', action.error);
        return state;
    }
    else if (action.type === 'ADD_TO_BASKET') {
        //basketState.add({...action.laptop});
        basketState.push(action.laptop);
        console.log('add to cart clicked', action.laptop);
        console.log(action);
        return state;
    }
    else {
        return state;
    }
}

export default laptopReducer;