// Импортируем ExpressJS в наш проект
const express = require('express')
const cors = require('cors')

// Инициализируем ExpressJS
const app = express() 

// Дополнительные MiddleWare:

app.use(cors())
//  Эти MiddleWare нужны нам чтобы мы могли получать body из request ()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



//  Здесь мы устанавливаем роутер.

//  Теперь при передаче запросов на http://localhost:5000/api/students будут 
//  работать контроллеры из файла ./routers/students. Это дает нам возможность создать отдельный
//  "Router()-экземпляр" для студентов (о нем чуть позже)
app.use('/api/students', require('./routers/students'))
app.use('/users', require('./routers/users.js'))


//  Теперь при передаче запросов на http://localhost:5000//api/teachers будут 
//  работать контроллеры из файла ./routers/teachers. Это дает нам возможность создать отдельный
//  "Router()-экземпляр" для преподавателей (о нем чуть позже)
app.use('/api/teachers', require('./routers/teachers'))

// Это то что мы будем видеть при передаче GET-запроса на http://localhost:5000, т.е.
// на домашнюю страницу
app.get('/', (req, res) =>{ res.send('<h1>Welcome to my School API!</h1>')})

// Размещает номер порта(можно выбрать любой) в переменную
const PORT = 5000

// Запускаем прослушиватель, на выбранном порту
// Теперь мы можем получить доступ к локальном серверу перейдя на http://localhost:[PORT]
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
