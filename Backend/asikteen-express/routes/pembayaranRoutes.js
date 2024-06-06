const express = require("express");
const router = express.Router();
const pembayaranController = require("../controllers/pembayaranController");

router.get("/", pembayaranController.getAllPembayaran);

module.exports = router;