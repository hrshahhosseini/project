const db2 = require("../../../database/mysql");
class Comment {
    async findAll() {
        const [commentResult, fields] = await db2.query(`
      select *
        from comments as p
        order by created_at`
        );
        return commentResult;
    }

    async createComment(req) {
        let myData = {
            title: req.body.title,
            content: req.body.content,
            author_id: req.body.author,
            slug: req.body.slug,
            status: req.body.status
        };
        const [comment] = await db2.query(`insert into comments set ?`, myData);
        return comment.insertId;
    }

    async find(columns = []) {
        const lookFor = columns.length > 0 ? columns.join(",") : "*";
        const [result] = await db2.query(`
        select ${lookFor} from comments 
        order by created_at desc
        limit 8`);
        return result;
    }

    async delete(commentID) {
        const [result] = await db2.query(`
        delete from comments 
        where id=?`,
            [commentID]
        );
        if (result.affectedRows > 0) return true;
    }

    async findOne(commentID) {
        const [result] = await db2.query(`
    select p.* , u.full_name 
    from comments as p
    left join users as u on p.author_id = u.id
    where p.id=?
    limit 1` , [commentID]);
        return result[0]
    }
}

module.exports = new Comment();