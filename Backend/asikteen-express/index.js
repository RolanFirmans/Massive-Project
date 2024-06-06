const express = require("express");
const db = require("./config/database");
const app = express();
const port = 8000;
const productRoutes = require("./routes/productRoutes");
const kategoriRoutes = require("./routes/kategoriRoutes");
const genderRoutes = require("./routes/genderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const detailRoutes = require("./routes/detailRoutes");
const statusRoutes = require("./routes/statusRoutes");
const loginRoutes = require("./routes/loginRoutes");
const pembayaranRoutes = require("./routes/pembayaranRoutes");

app.use("/photos", express.static('public'));
app.get("/", (req, res) => {
  res.send("Asikteen Company");
});

//app.get("/users", (req, res) => {
//  res.send("Read!");
//});

//app.post("/users", (req, res) => {
//  res.send("Create!");
//});

//app.put("/users", (req, res) => {
//  res.send("Update!");
//});

//app.delete("/users", (req, res) => {
 // res.send("Delete!");
//});

//cara callback
//app.get("/data", (req,res)=> {
//   db.query("SELECT * FROM books", (err, results) => {
//        console.log(results)
//   })
//})

//cara promise
app.use("/products", productRoutes);
app.use("/kategori", kategoriRoutes);
app.use("/gender", genderRoutes);
app.use("/cart", cartRoutes);
app.use("/detail", detailRoutes);
app.use("/status", statusRoutes);
app.use("/login", loginRoutes);
app.use("/pembayaran", pembayaranRoutes);

app.listen(port, () => {
  console.log(`Server has been running in http://localhost:${port}`);
});
