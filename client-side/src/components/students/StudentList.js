import React from 'react'
import StudentSummary from './StudentSummary'
// Используем useSelector для получения доступа к данным из store
import { useSelector } from 'react-redux'

function StudentList(props) {

    // Запихиваем список студентов с сервера в переменную studetnsList
    let studentsList = useSelector( (state) => state.students.data )
    return (
        <div>
            {studentsList ? studentsList.map( (student) => <StudentSummary key={student.email} student={student}/> )
            :
            <div>Loading...</div>}
        </div>
    )
}

export default StudentList
