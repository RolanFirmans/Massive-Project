const db = require('../config/database')
async function getAllDetail (req, res)  {
    try {
        const [results, fields] = await db.query("SELECT * FROM detailorder")

        console.log(results)
        console.log(fields)
        res.json(results)
    }catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllDetail
}