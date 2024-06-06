const db = require('../config/database')
async function getAllGender (req, res)  {
    try {
        const [results, fields] = await db.query("SELECT * FROM gender")

        console.log(results)
        console.log(fields)
        res.json(results)
    }catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllGender
}