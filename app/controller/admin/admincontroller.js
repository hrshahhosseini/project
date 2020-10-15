const model = require('../../model/admin/adminmodel')
const postModel = require('../../model/admin/postsmodel')
class adminController {
    constructor() { 
        // this.model = model
    }

    async dashboard(req, res) {
        let data = {
            totalUsers: await model.totalUser(),
            totalComment: await model.totalComment(),
            totalPosts: await model.totalPost(),
            totalViews: await model.totalView()
        }
        data.latests = await postModel.find(['author_id', 'content'])
        res.render('admin/dashboard/index', { layout: 'admin', ...data })
    };
}



module.exports = new adminController;