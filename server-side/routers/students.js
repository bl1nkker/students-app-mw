// Объект Router() - это изолированный экземпляр промежуточного программного обеспечения и маршрутов. 
// Вы можете думать об этом как о «мини-приложении», способном выполнять только функции промежуточного 
// программного обеспечения и маршрутизации. Каждое приложение Express имеет встроенный маршрутизатор приложений.

// Он также служит для структуризации проекта

// Импортируем ExpressJS для того чтобы использовать маршрутизацию
const express = require('express')

// Импортирую файл с функциями - контроллерами, для большей структуризации проекта
const studentsController = require('./../controllers/studentsController')
// Объявляем экземпляр Router()
const router = express.Router()

// Запрос GET на http://localhost:5000/api/students/ будет обработан функцией studentsController.getStudentsList
// Read
// http://localhost:5000/api/students
router.get( '/', studentsController.getStudentsList )

// Запрос GET на http://localhost:5000/api/students/:student_id будет обработан функцией studentsController.getStudentById
// http://localhost:5000/api/students/4
router.get( '/:student_id', studentsController.getStudentById )

// Запрос POST на http://localhost:5000/api/students/ будет обработан функцией studentsController.createStudent
// Create
// http://localhost:5000/api/students
router.post( '/', studentsController.createStudent )


// Delete
router.delete('/:student_id', studentsController.deleteStudentById)

// Update
router.patch('/:student_id', studentsController.updateStudentById)

// Экспортируем наш роутер, для того чтобы использовать его в основном файле
// То же самое что и export default router
module.exports = router 