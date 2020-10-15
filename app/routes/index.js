const express = require('express')
const router = express.Router()

const mainAdmin = require('./admin/index')
let rout = (application) => {
    application.use('/admin' , mainAdmin)
}
module.exports = {
    myRouter: rout
}