const db = require('../config/database')
async function getAllProducts (req, res)  {
    try {
        const [results, fields] = await db.query("SELECT * FROM produk")

        console.log(results)
        console.log(fields)
        res.json(results)
    }catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllProducts
}