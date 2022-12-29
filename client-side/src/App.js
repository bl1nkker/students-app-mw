import StudentList from "./components/students/StudentList";
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getStudents } from './redux/actions/studentsActions'
import StudentsForm from "./components/students/StudentsForm";
import AuthForm from "./components/students/AuthForm";

function App() {
  const dispatch = useDispatch()
  let user = useSelector( (state) => state.user.user )

  useEffect( () => {
    dispatch(getStudents())
  }, [dispatch])
  
  return (
    <div className="App">
      <AuthForm />
      Students: 
      <StudentList />
      { user && <StudentsForm /> }
      
    </div>
  );
}

export default App;

