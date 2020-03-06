
export const signIn = (creds) => {
    return (dispatch, getState , {getFirebase}) => {
        // initialise firebase instance
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'LOGIN_ERROR', error})
        })
    }
}

export const signUp = (creds) => {
    return (dispatch, getState , {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
            creds.email,
            creds.password
        ).then(() => {
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch((error) => {
            dispatch({ type: 'SIGNUP_ERROR', error })
            console.log(error)
        })
    }
}

export const signOut = () => {
    return (dispatch, getState , {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
        .then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' })
        })
    }
}