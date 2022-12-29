import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent, updateStudent } from './../../redux/actions/studentsActions'

function StudentSummary(props) {
    const dispatch = useDispatch()
    let user = useSelector( (state) => state.user.user )
    const [name, setName] = useState(props.student.name)
    const [email, setEmail] = useState(props.student.email)
    const [gpa, setGpa] = useState(props.student.gpa)
    const [editMode, setEditMode] = useState(false)

    const deleteHandler = () =>{
        dispatch(deleteStudent(props.student.id))
    }

    const confirmEdits = (event) => {
        event.preventDefault()
        const updatedStudent = { ...props.student, name:name, email:email, gpa:gpa }
        dispatch(updateStudent(props.student.id, updatedStudent))
        setEditMode(false)
    }

    return (
        <div>
            <p>{props.student.id}</p>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <img src={props.student.avatar} alt='student-1'/>
            {!editMode ? 
            <div>
                <h4>{gpa}</h4>
            </div>
            :
            <div>
                <input value={gpa} onChange={(event) => setGpa(event.target.value)}/>
                <button onClick={(event) => confirmEdits(event)}>Confirm Edits</button>
            </div>
            }
            {
                user &&
                <div>
                    <button onClick={deleteHandler}>Delete Student</button>
                    <button onClick={() => setEditMode(!editMode)}>Edit GPA</button>
                </div>
            }
            
            <hr />
        </div>
        
    )
}

export default StudentSummary
