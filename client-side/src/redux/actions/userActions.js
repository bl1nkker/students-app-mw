import { LOG_OUT_ERROR, LOG_OUT_SUCCESS, SIGN_IN_ERROR, SIGN_IN_SUCCESS } from './../types'
import * as api from './../../api'

export const signIn = (userData) => async(dispatch) =>{
    try {
        const {data} = await api.signInUser(userData)
        console.log(data)
        dispatch({ type:SIGN_IN_SUCCESS, payload: { user:data } })
    } catch (error) {
        dispatch({ type:SIGN_IN_ERROR, payload: { error:error } })
    }
}

export const logOut = () => async(dispatch) =>{
    try {
        dispatch({ type: LOG_OUT_SUCCESS, payload: {user:null} })
    } catch (error) {
        dispatch({ type: LOG_OUT_ERROR, payload: {error:error} })
    }
}