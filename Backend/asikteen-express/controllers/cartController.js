const db = require('../config/database')
async function getAllCart (req, res)  {
    try {
        const [results, fields] = await db.query("SELECT * FROM cart")

        console.log(results)
        console.log(fields)
        res.json(results)
    }catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllCart
}