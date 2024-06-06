const db = require('../config/database')
async function getAllLogin (req, res)  {
    try {
        const [results, fields] = await db.query("SELECT * FROM login")

        console.log(results)
        console.log(fields)
        res.json(results)
    }catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllLogin
}