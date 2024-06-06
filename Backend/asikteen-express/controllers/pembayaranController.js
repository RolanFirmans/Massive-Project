const db = require('../config/database')
async function getAllPembayaran (req, res)  {
    try {
        const [results, fields] = await db.query("SELECT * FROM pembayaran")

        console.log(results)
        console.log(fields)
        res.json(results)
    }catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllPembayaran
}