
// change bool variable - which will replace screen with "Please Wait"
// until async action is complete  
export const changeDisplayDuringAsyncAction = () => {
    return(dispatch) => {
        dispatch({type:'CHANGE_ASYNC_STATUS'});
    }
}

export const checkout = (laptopIDs) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
      
        console.log("checkout redux method called");
        // filter through the array of laptop ids passed from params
        // delete each item from the database
        laptopIDs.forEach(e => {
            firestore.collection('Laptops').doc(e).delete().then( () => {    
                dispatch({type: 'DELETE_LAPTOP'});  
            }).catch( (error) => {
                dispatch({type: 'DELETE_LAPTOP_ERROR', error});  
            });
        }); 
        dispatch({type:'CHANGE_ASYNC_STATUS'}); // turn off wait screen 
    } 
}

export const postLaptop = (laptop) => {

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('Laptops').add({
            ...laptop  
        }).then( () => {
            dispatch({type: 'POST_LAPTOP', laptop});  
            dispatch({type:'CHANGE_ASYNC_STATUS'}); // turn of waiting screen 
        }).catch( (error) => {
            dispatch({type: 'POST_LAPTOP_ERROR', error});  
        })
    }
}

export const uploadImage = (laptop) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        var storageRef = firebase.storage().ref(`laptopImgs/${new Date().getTime()}`);

        storageRef.put(laptop.image).then( (snapshot) => {
            dispatch({type: 'UPLOAD_IMAGE', snapshot});
            laptop.image = snapshot.metadata.name; // set the value of image to the name of the file on storage to avoid error in postLaptop
            const images = firebase.storage().ref().child('laptopImgs');
            const image = images.child(snapshot.metadata.name); 
            image.getDownloadURL().then((url) => { laptop.imageURL = url }); // get URL of image on storage and set as value for imageURL
            dispatch(postLaptop(laptop));  // pass the laptop with these new values to the postLaptop method
        }).catch( (error) => {
            dispatch({type: 'UPLOAD_IMAGE_ERROR', error});  
        })
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