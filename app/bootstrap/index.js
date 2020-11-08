const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const MySQLStore = require('express-mysql-session')(session)
const mySQLOptions = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}
const sessionStore = new MySQLStore(mySQLOptions)
exports.config = (application) => {
    application.use(bodyParser.json())   // input tags has to have 'name'
    application.use(bodyParser.urlencoded({ extended: 'false' })) // we got 'use' so it works like middleware
    application.engine('handlebars', hbs())
    application.set('view engine', 'handlebars')
    application.set('views', path.join(__dirname, '../views'))
    application.use(express.static(path.join(__dirname, '../../public'))) // تو پابلیک فونت و ایکونِ هدر و فایل سی اس اس و ایناست //   / هم مهمه . سه نوع آدرس دهی داریم . این جدیده با / شروع میشه // تنظیمات اولیه برای دسترسی به فایل های توی پابلیک از کل پروژه

    application.use(cookieParser())
    application.use(session({
        name: 'reza.sid',
        store: sessionStore,
        secret: "123",
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60,
            httpOnly: true,
            secure: false
        }

    }))
};

