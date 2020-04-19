
const initState = {
    totalPrice: 0
}

const laptopReducer = (state = initState, action) => {
    if (action.type === 'POST_LAPTOP') {
        console.log('posted laptop', action.laptop);
        console.log(state);
        return state;
    }
    else if (action.type === 'POST_LAPTOP_ERROR') {
        console.log('post laptop error', action.error);
        return state;
    }
    else if (action.type === 'ADD_TO_BASKET') {
        console.log('add to cart clicked', action.laptop);
        console.log(action.laptop.price);
        console.log("state: ");
        console.log(state);
        var activePrice = parseFloat(action.laptop.price);
        return {
            ...state,
            totalPrice: state.totalPrice + activePrice
        }   
    }
    else if (action.type === 'ADD_TO_BASKET_ERROR') {
        console.log('add to cart error', action.error);
        return state;
    }
    else if (action.type === 'REMOVE_FROM_BASKET') {
        console.log('remove from cart clicked', action.laptop);
        console.log(action);
        return {
            ...state,
            totalPrice: state.totalPrice - action.laptop.price
        } 
    }
    else if (action.type === 'REMOVE_FROM_BASKET_ERROR') {
        console.log('remove from cart clicked', action.error);
        return state;
    }
    else if (action.type === 'INITIALISE_TOTAL') {
        console.log('initialising total', action.total);
        return {
            ...state,
            totalPrice: action.total
        }
    }
    else {
        return state;
    }
}

export default laptopReducer;