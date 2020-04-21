
const initState = {
    totalPrice: 0,
    imageName: '',
    asyncActionFinished: true
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
    else if (action.type === 'CHANGE_ASYNC_STATUS') {
        if (state.asyncActionFinished) {
            return {
                ...state,
                asyncActionFinished: false
            }
        } else {
            return {
                ...state,
                asyncActionFinished: true
            }
        }
    }
    else if (action.type === 'UPLOAD_IMAGE') {
        console.log('uploaded image to firebase storage');
        console.log(action.snapshot.metadata);
        return {
            ...state,
            imageName: action.snapshot.metadata.name
        };
    }   
    else if (action.type === 'UPLOAD_IMAGE_ERROR') {
        console.log('error uploading image', action.error);
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
    else if (action.type === "DELETE_LAPTOP") {
        console.log('laptop deleted');
        return {
            ...state,
            totalPrice: state.totalPrice - action.totalPrices
        } 
    }
    else if (action.type === "DELETE_LAPTOP_ERROR") {
        console.log('laptop deletion error', action.error);
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