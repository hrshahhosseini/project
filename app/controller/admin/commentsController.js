const commentModel = require('../../model/admin/commentsmodel')
class CommentController {
    constructor() { }
    async comments(req, res) {
        const comment = await commentModel.findAll()
        console.log("CommentController -> comments -> comment", comment)
        res.render('admin/comments/index', { layout: 'admin' , comment })
    }
}
module.exports = new CommentController