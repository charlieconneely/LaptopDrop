//  make async actions with database using redux store and thunk 

// need to remove raw data and replace with user input
export const postLaptop = (laptop) => {
    return (dispatch, getState, {getFirbase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('Laptops').add({
            ...laptop,
            brandname: "Dell",
            condition: "Used",
            memory: "1 TB HDD",
            price: 800,
            processor: "Intel Core i7",
            prodID :3004,
            ram: 8,
            screensize: 12
        }).then( () => {
            dispatch({type: 'POST_LAPTOP', laptop});  
        }).catch( (error) => {
            dispatch({type: 'POST_LAPTOP_ERROR', error});  
        })
                 
    }
}