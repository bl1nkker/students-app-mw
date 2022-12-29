import { combineReducers } from 'redux'
import {studentsReducer} from './studentsReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
    students: studentsReducer,
    user: userReducer
})