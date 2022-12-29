const fs = require('fs')

let users = fs.readFile('./data/users.json', (error, data) => { users = JSON.parse(data)})

exports.signIn  = (req, res) =>{
    try {
        const { email, password } = req.body
        
        // user1, user2
        const existingUser = users.find( (user) => user.email == email )
        if (!existingUser) return res.send("User is not exist")
        console.log(existingUser.password == password)

        const passwordIsCorrect = existingUser.password == password
        if(!passwordIsCorrect) return res.send('Password is incorrect')
        console.log(existingUser)
        res.send(existingUser)

    } catch (error) {
        res.send(error)
    }
}