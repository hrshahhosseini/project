const db2 = require("../../../database/mysql");
class post {
  async findAll() {
    const [postResult, fields] = await db2.query(`
      select p.* , u.full_name
        from posts as p
        left join users as u on p.author_id = u.id`
    );
    return postResult;
  }

  async createPost(req) {
    let myData = {
      title: req.body.title,
      content: req.body.content,
      author_id: req.body.author,
      slug: req.body.slug,
      status: req.body.status
    };
    const [post] = await db2.query(`insert into posts set ?`, myData);
    return post.insertId;
  }

  async find(columns = []) {
    const lookFor = columns.length > 0 ? columns.join(",") : "*";
    const [result] = await db2.query(`
        select ${lookFor} from posts 
        order by created_at desc
        limit 8`);
    return result;
  }

  async delete(postID) {
    const [result] = await db2.query(`
        delete from posts 
        where id=?`,
      [postID]
    );
    if (result.affectedRows > 0) return true;
  }

  async findOne(postID) {
    const [result] = await db2.query(`
    select p.* , u.full_name 
    from posts as p
    left join users as u on p.author_id = u.id
    where p.id=?
    limit 1` , [postID]);
    return result[0]
  }
}

module.exports = new post();