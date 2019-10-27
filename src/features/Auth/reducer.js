import { combineReducers } from 'redux'
import { 
    REQUESTING_LOGIN, LOGIN_ERROR, LOGIN_SUCCESS,
    REGISTER_ERROR, REGISTER_SUCCESS, REQUESTING_REGISTER
} from '../../constants'

// selectors
export const isLoggedIn = state => state.auth.REQUESTING_LOGIN

const LOGIN_REDUCER = (state=false, action) => {
    switch(action.type){
        case REQUESTING_LOGIN:
            return
        case LOGIN_SUCCESS:
            return
        case LOGIN_ERROR:
            return 
        default:
            return state
    }
}


const REGISTER_REDUCER = (state={}, action) => {
    switch(action.type){
        case REQUESTING_REGISTER:
            return
        case REGISTER_SUCCESS: 
            return
        case REGISTER_ERROR:
            return
        default:
            return state
    }
}

export const authReducer = combineReducers({
    LOGIN_REDUCER,
    REGISTER_REDUCER
})