import axios from 'axios'

// Backend Route (we set it up at the server-side)
// We will fetch/update/delete data
const API = axios.create({ baseURL:'http://localhost:5000' })
// Here we fetch data using api (GET request)
// Read
export const fetchStudents = () => API.get('/api/students')
export const findStudentById = (studentId) => API.get(`/api/students/${studentId}`)
// Here we create data using api (POST request)
// Create
export const createStudent = (newStudent) => API.post('/api/students', newStudent)
// Here we delete data using api (DELETE request)
// Delete
export const deleteStudentById = (studentId) => API.delete(`/api/students/${studentId}`)
// Update
export const updateStudentById = (studentId, updatedData) => API.patch(`/api/students/${studentId}`, updatedData)

// For Auth
export const signInUser = (userData) => API.post('/users', userData)
