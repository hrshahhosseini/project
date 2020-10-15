// const numconverter = require('../../services/numberService')
const userModel = require('../../model/admin/usersmodel')
const model = require('../../model/admin/postsmodel')
// const Validator = require('../../validator/posts')
const PostPresenter = require('../../presenters/posts')
class adminController {
    constructor() {

    }
    //
    async posts(req, res) {
        const data = {
            postdata: await model.findAll()
        }
        const presentedData = new PostPresenter(data.postdata).toJalaliCreatedAt()
        res.render('admin/posts/posts', { layout: 'admin', presentedData })
    }
    //
    async create(req, res) {
        const users = await userModel.findAll(['full_name', 'id'])
        res.render('admin/posts/create', { layout: 'admin', users })
    }
    //
    async store(req, res) {
        const insertID = await model.createPost(req)
        res.redirect('/admin/dashboard')
    }
    //
    async remove(req, res) {
        const result = await model.delete(req.params.postID)
        res.redirect('/admin/posts')
    }
    //
    async edit(req, res) {
        const post = await model.findOne(req.params.postID)
        const users = await userModel.findAll(['full_name', 'id'])
        res.render('admin/posts/edit', { layout: "admin", post , users })
    }
}
module.exports = new adminController;