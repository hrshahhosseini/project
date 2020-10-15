const session = require('express-session')
const db2 = require('mysql') 
const MySQLStore = require('express-mysql-session')(session) 
const { v4: uuidv4 } = require('uuid');
module.exports = {
    name: "riza.sid",
    secret: "19698139",
    resave: "false",
    saveUninitialized: "false",
    cookie: {
        httpOnly: "true",
        secure: "false",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24,
        // expires:
        path: "/"
    },
    genid: function (req) {
        return uuidv4()
    },
    store: new MySQLStore({}, db2.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "1",
        database: "newDB"
    }))
}