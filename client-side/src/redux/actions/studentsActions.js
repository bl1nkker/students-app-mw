import { FETCH_STUDENTS, FETCH_STUDENTS_ERROR, DELETE_STUDENT, DELETE_STUDENT_ERROR, CREATE_STUDENT, CREATE_STUDENT_ERROR, UPDATE_STUDENT, UPDATE_STUDENT_ERROR } from "../types"
// Для удобства работы, делаем такой импорт
import * as api from './../../api'

export const getStudents = () => async(dispatch) =>{
    try {

        // Возвращает Promise-объект, из которого мы извлекаем нужные нам данные
        const { data } = await api.fetchStudents()
        dispatch({ type:FETCH_STUDENTS, payload:{ data:data } })

    } catch (error) {
        dispatch({ type:FETCH_STUDENTS_ERROR, payload:{ error:error } })
    }
}

export const deleteStudent = (student_id) => async(dispatch) => {
    try {
        const { data } = await api.deleteStudentById(student_id)
        console.log(data)

        dispatch({ type:DELETE_STUDENT, payload:{ data:data } })
    } catch (error) {
        dispatch({ type:DELETE_STUDENT_ERROR, payload:{ error:error } })
    }
}

export const createStudent = (new_student) => async(dispatch) =>{
    try {
        const { data } = await api.createStudent(new_student)

        dispatch({ type:CREATE_STUDENT, payload: {data:data} })
    } catch (error) {
        dispatch({ type:CREATE_STUDENT_ERROR, payload:{ error:error } })
    }
}

export const updateStudent = (student_id, updatedStudent) => async(dispatch) =>{
    try {
        const { data } = await api.updateStudentById(student_id, updatedStudent)
        dispatch({ type:UPDATE_STUDENT, payload: { data:data } })
    } catch (error) {
        dispatch({ type:UPDATE_STUDENT_ERROR, payload:{ error:error } })
    }
}