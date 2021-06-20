require("dotenv").config();
const path = require("path");

const PORT = process.env.PORT || 1337;

const config = {
  PORT,
  assets: path.join(__dirname, "../../dist"),
};

module.exports = config;
