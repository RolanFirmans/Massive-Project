//menampung semua router yang ada
const express = require("express");
const app = express();
const cartRoutes = require("./cartRoutes");
const detailRoutes = require("./detailRoutes");
const genderRoutes = require("./genderRoutes");
const kategoriRoutes = require("./kategoriRoutes");
const loginRoutes = require("./loginRoutes");
const pembayaranRoutes = require("./pembayaranRoutes");
const productRoutes = require("./productRoutes");
const statusRoutes = require("./statusRoutes");


const API = "/api/asikteen"

app.use(API, cartRoutes);
app.use(API, detailRoutes);
app.use(API, genderRoutes);
app.use(API, kategoriRoutes);
app.use(API, loginRoutes);
app.use(API, pembayaranRoutes);
app.use(API, productRoutes);
app.use(API, statusRoutes);


module.exports = app;