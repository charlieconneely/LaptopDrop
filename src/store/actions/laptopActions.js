//  make async actions with database using redux store and thunk 

// need to remove raw data and replace with user input
export const postLaptop = (laptop) => {
    return (dispatch, getState, {getFirbase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('Laptops').add({
            ...laptop  
        }).then( () => {
            dispatch({type: 'POST_LAPTOP', laptop});  
        }).catch( (error) => {
            dispatch({type: 'POST_LAPTOP_ERROR', error});  
        })
                 
    }
}

export const addLaptopToBasket = (laptop) => {
    return (dispatch, getState, {getFirbase, getFirestore}) => {
        const firestore = getFirestore();
        // const item = getState().firestore.ordered.Laptops.id;
        console.log(laptop.id);
        firestore.collection('Laptops').doc(laptop.id).update({
            basketID: laptop.basketID
        }).then( () => {    
            dispatch({type: 'POST_LAPTOP', laptop});  
        }).catch( (error) => {
            dispatch({type: 'POST_LAPTOP_ERROR', error});  
        })
                 
    }
}