const db = require('../config/database')
async function getAllStatus (req, res)  {
    try {
        const [results, fields] = await db.query("SELECT * FROM orderstatus")

        console.log(results)
        console.log(fields)
        res.json(results)
    }catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllStatus
}