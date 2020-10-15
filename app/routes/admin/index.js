const express = require('express')
const Router = express.Router()

const adminRouter = require('./dashboard')
const postRouter = require('./posts')
const commentRouter = require('./comments')

Router.get('/dashboard', adminRouter)
Router.use('/posts', postRouter)
Router.use('/comments', commentRouter)
module.exports = Router;