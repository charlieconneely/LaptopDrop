//  make async actions with database using redux store and thunk 

// need to remove raw data and replace with user input
export const postLaptop = (laptop) => {

    return (dispatch, getState, {getFirebase, getFirestore}) => {
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

export const uploadImage = (image) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
         // need to find a unique ID instead of using the time
        var storageRef = firebase.storage().ref(`laptopImgs/${new Date().getTime()}`);
        storageRef.put(image);
    }
}

export const addLaptopToBasket = (laptop) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        console.log(laptop.id);
        firestore.collection('Laptops').doc(laptop.id).update({
            basketID: laptop.basketID
        }).then( () => {    
            dispatch({type: 'ADD_TO_BASKET', laptop});  
        }).catch( (error) => {
            dispatch({type: 'ADD_TO_BASKET_ERROR', error});  
        })               
    }
}

export const removeLaptopFromBasket = (laptop) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        console.log(laptop.id);
        firestore.collection('Laptops').doc(laptop.id).update({
            basketID: null
        }).then( () => {    
            dispatch({type: 'REMOVE_FROM_BASKET', laptop});  
        }).catch( (error) => {
            dispatch({type: 'REMOVE_FROM_BASKET_ERROR', error});  
        })               
    }
}

export const initialiseTotal = (total) => {
    return (dispatch) => {
        dispatch({type: 'INITIALISE_TOTAL', total});
    } 
}