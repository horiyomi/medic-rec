import { combineReducers } from 'redux'
import { LOGIN_SUCCESS } from './constants'
import { authReducer } from './features/Auth/reducer'

// Selectors
export const tokenSelector = state => state.token

const token = (state=null, { type, payload }) => {
    switch(type){
        case LOGIN_SUCCESS:
            return payload
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    token,
    authReducer
})
