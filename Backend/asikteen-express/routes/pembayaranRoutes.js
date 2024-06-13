const express = require("express");
const router = express.Router();
const pembayaranController = require("../controllers/pembayaranController");

router.get("/pembayaran", pembayaranController.getAllPembayaran);

module.exports = router;