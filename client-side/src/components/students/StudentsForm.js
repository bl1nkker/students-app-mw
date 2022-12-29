import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createStudent } from './../../redux/actions/studentsActions'
import FileBase from 'react-file-base64'

function StudentsForm() {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ gpa, setGpa ] = useState('')
    const [avatar, setAvatar] = useState('')

    const dispatch = useDispatch()

    const createHandler = (event) =>{
        event.preventDefault()
        const new_student = { name:name, email:email, gpa:gpa, avatar:avatar }
        dispatch(createStudent(new_student))
    }

    return (
        <form>
            Create Student<br />
            
            <input onChange={ (event) => setName(event.target.value)} value={name} type='text' placeholder='Name'/><br/>
            <input onChange={ (event) => setEmail(event.target.value)} value={email} type='email' placeholder='Email'/><br/>
            <input onChange={ (event) => setGpa(event.target.value)} value={gpa} type='text' placeholder='GPA'/><br/>
            <FileBase type='file' multiple={false} value={avatar} onDone={({base64}) => setAvatar(base64)} /> <br/>
            <button onClick={(event) => createHandler(event)}>Submit</button>
        </form>
    )
}

export default StudentsForm
