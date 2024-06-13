const db = require('../config/database')
const getAllLogin = async (req, res) => {
    try {
        const [results] = await db.query("SELECT * FROM login");
        res.status(200).json({
            payload: {
                message: "berhasil mengambil semua data user",
                datas: results,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

const addUser = async (req, res) => {
    try {
        const { namaLengkap, email, password, notelp, alamat, usernamebank, namabank, nomorrekening } = req.body;
        const [results] = await db.query(
            `INSERT INTO login (namaLengkap, email, password, notelp, alamat, usernamebank, namabank, nomorrekening) VALUES ('${namaLengkap}', '${email}', '${password}', '${notelp}', '${alamat}', '${usernamebank}', '${namabank}', '${nomorrekening}')`
        );
        console.log(results);

        res.status(201).json({
            payload: {
                message: "berhasil menambah data user",
                datas: results,
            },
        });
    }catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllLogin, addUser
}