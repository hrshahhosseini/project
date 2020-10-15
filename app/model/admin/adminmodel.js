const db2 = require('../../../database/mysql')
class admin {
    constructor() {

    }
    
    async totalUser() {
        const [usersCount] = await db2.query('select count(id) as totalUsers from users')
        return usersCount[0].totalUsers
    }

    async totalComment() {
        const [commentsCount] = await db2.query('select count(id) as totalComment from comments')
        return commentsCount[0].totalComment
    }

    async totalPost() {
        const [postNumber] = await db2.query(`select count(id) as count from posts`);
        // console.log(postNumber[0].count)
        return postNumber[0].count
    }

    async totalView() {
        const [viewsCount] = await db2.query('select count(id) as totalView from posts')
        return viewsCount[0].totalView
    }   

    
}

module.exports = new admin;