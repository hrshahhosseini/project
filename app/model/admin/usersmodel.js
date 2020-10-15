const db2 = require('../../../database/mysql')
const findAll = async (columns = []) => {
    const lookFor = columns.length > 0 ? columns.join(',') : '*';
    const [rows] = await db2.query(`
        select ${lookFor} from users
        group by full_name
    `)
    return rows
}
module.exports = {
    findAll
}