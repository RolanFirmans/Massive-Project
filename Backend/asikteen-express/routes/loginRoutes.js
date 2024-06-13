const express = require("express");
const router = express.Router();
const { getAllLogin, addUser} = require("../controllers/loginController");


router.get("/login", getAllLogin);
router.post("/login", addUser);

module.exports = router;