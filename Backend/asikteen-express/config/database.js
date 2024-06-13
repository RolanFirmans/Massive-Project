//cara call back (promise)

//const mysql = require("mysql2")

//const db = mysql.createConnection({
//    host: "localhost",
//    user: "root",
//   database: "asikteen_library",
//    password: "",
//})

//db.connect((err) => {
//    if (err) {
//        console.log(err)
//        return
//    }
//    console.log("Connect to Database with ID" + db.threadId)
//})

//cara promise
const mysql = require("mysql2/promise")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
   database: "prlvd_catalog",
    password: "",
})

db.getConnection()
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.error("Database connection failed:" + err))

module.exports = db