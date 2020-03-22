import { act } from "react-dom/test-utils";

const initState = {
    
}

// const basketState = [];

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
        console.log('add to cart clicked', action.laptop);
        console.log(action);
        return state;
    }
    else if (action.type === 'ADD_TO_BASKET_ERROR') {
        console.log('add to cart error', action.error);
        return state;
    }
    else if (action.type === 'REMOVE_FROM_BASKET') {
        console.log('remove from cart clicked', action.laptop);
        console.log(action);
        return state;
    }
    else if (action.type === 'REMOVE_FROM_BASKET_ERROR') {
        console.log('remove from cart clicked', action.error);
        return state;
    }
    else {
        return state;
    }
}

export default laptopReducer;