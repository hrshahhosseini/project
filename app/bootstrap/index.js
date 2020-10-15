const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser');
const sessionConfig = require('./sessionConfig')
const session = require('express-session')
const cookieParser = require('cookie-parser')

exports.config = (application) => {
    application.use(bodyParser.json())   // input tags has to have 'name'
    application.use(bodyParser.urlencoded({ extended: 'false' })) // we got 'use' so it works like middleware
    application.engine('handlebars', hbs())
    application.set('view engine', 'handlebars')
    application.set('views', path.join(__dirname, '../views'))
    application.use(express.static(path.join(__dirname, '../../public'))) // تو پابلیک فونت و ایکونِ هدر و فایل سی اس اس و ایناست //   / هم مهمه . سه نوع آدرس دهی داریم . این جدیده با / شروع میشه // تنظیمات اولیه برای دسترسی به فایل های توی پابلیک از کل پروژه
    // application.use(express.json())
    application.use(cookieParser())
};


exports.setSession = (application) => {
    application.use(session({ ...sessionConfig }))
}
