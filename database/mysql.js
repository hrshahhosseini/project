const mysql = require('mysql2')
// const session = require('../app/bootstrap/index').session

// const options = {
//     host: "localhost",
//     port: "3306",
//     user: "root",
//     password: "1",
//     database: "newDB"
// }
// let sessionConnection = mysql.createConnection(options)
// let sessionStore = new mySQLStore({}, sessionConnection)


const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})
connection.connect((err) => {
    if (err) throw err.message
    else console.log('mysql server is connected to process as well ...')
})
// sessionConnection.connect((err) => {
//     if (err) throw err.message
//     else console.log('mysql server is connected to process as well ...')
// })

module.exports = connection.promise()