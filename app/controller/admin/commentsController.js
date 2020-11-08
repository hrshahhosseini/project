const commentModel = require('../../model/admin/commentsmodel')
class CommentController {
    constructor() { }
    async comments(req, res) {
        req.session.view = 1;
        const comment = await commentModel.findAll()
        res.render('admin/comments/index', { layout: 'admin' , comment })
    }
}
module.exports = new CommentController