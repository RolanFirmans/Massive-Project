const express = require("express");
const router = express.Router();
const genderController = require("../controllers/genderController");

router.get("/", genderController.getAllGender);

module.exports = router;