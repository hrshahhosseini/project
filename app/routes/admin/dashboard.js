const express = require('express')
const adminRouter = express.Router()
const adminController = require('../../controller/admin/admincontroller')
adminRouter.get('/dashboard', adminController.dashboard)

module.exports = adminRouter;