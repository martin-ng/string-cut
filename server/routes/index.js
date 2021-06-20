const express = require("express");
const router = express.Router();

const cutStringRoute = require("./cutStringRoute");

router.use("/test", cutStringRoute);

module.exports = router;
