
const initState = {
    
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
    else {
        return state;
    }
}

export default laptopReducer;