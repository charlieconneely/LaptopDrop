
const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {  
    if (action.type === 'LOGIN_ERROR') {
        console.log('login error');
        return {
            ...state,
            authError: 'Login failed'
        }      
    }
    else if (action.type === 'LOGIN_SUCCESS') {
        console.log('login success');
        return {
            ...state,
            authError: null
        }
    }
    else if (action.type === 'LOGOUT_SUCCESS') {
        console.log('logout success');
        return state;
    }   
    else if (action.type === 'SIGNUP_SUCCESS') {
        console.log('signup success');
        return {
            ...state,
            authError: null
        }
    }
    else if (action.type === 'SIGNUP_ERROR') {
        console.log('signup error');
        return {
            ...state, 
            // set auth error to the error supplied from the catch
            // method in authActions
            authError: action.error.message
        }
    }
    else {
        return state;
    }
}

export default authReducer