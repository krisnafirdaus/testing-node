var express = require("express");
var router = express.Router();

const base = require("../controllers/baseControllers.js");
router.get("/", base.index);

module.exports = router;
