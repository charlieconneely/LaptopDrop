
const initState = {
    laptops: [
        {brandname: "HP",
        condition: "New",
        memory: "1 TB HDD",
        price: 400,
        processor: "Intel Core i3",
        prodID :4004,
        ram: 4,
        screensize: 12}
    ]
}

const laptopReducer = (state = initState, action) => {
    switch (action.type) {
        case 'POST_LAPTOP':
            console.log('posted laptop', action.laptop)
            return state;
        case 'POST_LAPTOP_ERROR':
            console.log('post laptop error', action.error);
            return state;    
        default:
            return state;
    }
}

export default laptopReducer;