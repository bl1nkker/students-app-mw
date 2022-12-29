import { DELETE_STUDENT, DELETE_STUDENT_ERROR, FETCH_STUDENTS, FETCH_STUDENTS_ERROR, CREATE_STUDENT, CREATE_STUDENT_ERROR, UPDATE_STUDENT_ERROR, UPDATE_STUDENT } from "../types"


export const studentsReducer = (state={}, action) =>{

    switch (action.type){
        case FETCH_STUDENTS:
            return {...state, data: action.payload.data}
        case FETCH_STUDENTS_ERROR:
            console.log(action.payload.error)
            return {...state, error: action.payload.error}

        case DELETE_STUDENT:
            return {...state, data: action.payload.data}
        case DELETE_STUDENT_ERROR:
            return {...state, error: action.payload.error}

        case CREATE_STUDENT:
            return {...state, data: action.payload.data}
        case CREATE_STUDENT_ERROR:
            return {...state, error: action.payload.error}
        
        case UPDATE_STUDENT:
            return {...state, data: action.payload.data}
        case UPDATE_STUDENT_ERROR:
            return {...state, error: action.payload.error}

        default:
            return state
    }
}