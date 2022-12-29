import { LOG_OUT_ERROR, LOG_OUT_SUCCESS, SIGN_IN_ERROR, SIGN_IN_SUCCESS } from './../types'

export const userReducer = (state={}, action) =>{

    switch (action.type){
        case SIGN_IN_SUCCESS:
            return { ...state, user:action.payload.user }
        case SIGN_IN_ERROR:
            return { ...state, error:action.payload.error }

        case LOG_OUT_SUCCESS:
            return { ...state, user:action.payload.user }
        case LOG_OUT_ERROR:
            return { ...state, error:action.payload.error }
        default:
            return state
    }
}