// Модуль для работы с файлами
const fs = require('fs')

// В переменную students запихиваем данные из файла ./data/students.json
let students = fs.readFile('./data/students.json', (error, data) => { students = JSON.parse(data)})

// Экспортируем эту функцию
exports.getStudentsList = (req, res) =>{
    // При запуске этой функции, пользователю отправится список студентов
    // Помимо этого отправляем статус ответа пользователю (200 - ОК)
    // Это делать не обязательно, но желательно
    res.status(200).send(students)
    
}

// Экспортируем эту функцию
exports.getStudentById = (req, res) =>{
    // В переменную current_student (сначала ищем в массиве студентов) запихиваем студента с нужным нам student_id
    const current_student = students.find( (student) => student.id === parseInt(req.params.student_id) )
    // Если студент с таким student_id нашелся, то
    if ( current_student ){
        // Отправляем статус 200(ОК), и текущего студента в формате JSON
        res.status(200).json(current_student)
    // Если студента нет в массиве, то
    } else {
        // Отправляем статус 400(Bad Request), и небольшое сообщение
        res.status(400).send('Student with that ID not found. Please write the correct ID')
    }
}

// Экспортируем эту функцию
exports.createStudent = (req, res) =>{
    // req.body = { school: 1, name:Josh }
    const new_student = {...req.body, id: Date.now() }
    // Создаем новый список, который копирует данные из students, и помещаем туда новый объект
    const updatedStudentsList = [...students, new_student]

    // Перезаписываем данные в файле в данными
    fs.writeFile('./data/students.json', JSON.stringify(updatedStudentsList), () => console.log('Data saved'))
    // Отправляем пользователю статут 200(ОК) и обновленный список студентов
    res.status(200).send(updatedStudentsList)
}

exports.deleteStudentById = (req,res) =>{
    const studentIdToDelete = req.params.student_id
    const updatedStudentsList = students.filter( (student) => student.id != studentIdToDelete )
    fs.writeFile('./data/students.json', JSON.stringify(updatedStudentsList), () => console.log('Data saved'))
    res.send(updatedStudentsList)
}

exports.updateStudentById = (req, res) => {
    const updatedStudent = req.body
    const updatedStudentsList = students.map( (student) => student.id == req.params.student_id ? {...updatedStudent, id:student.id} : student)
    fs.writeFile('./data/students.json', JSON.stringify(updatedStudentsList), () => console.log('Data saved'))
    res.send(updatedStudentsList)
}