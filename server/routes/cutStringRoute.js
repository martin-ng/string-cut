const express = require("express");
const router = express.Router();

const cutStringController = require("../controllers/cutStringController");

router.post("/", cutStringController.cut);

module.exports = router;
