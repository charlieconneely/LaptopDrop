
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
    if (action.type === 'POST_LAPTOP') {
        console.log('posted laptop', action.laptop);
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