const db = require('../config/database')
async function getAllKategori (req, res)  {
    try {
        const [results, fields] = await db.query("SELECT * FROM kategori")

        console.log(results)
        console.log(fields)
        res.json(results)
    }catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllKategori
}