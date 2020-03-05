
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
    else {
        return state;
    }
}

export default authReducer