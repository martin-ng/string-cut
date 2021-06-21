const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const routes = require("./routes");
const config = require("./config/config");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
// app.use(express.static(config.assets));

app.get("/hello", (req, res) => {
  res.send("hello world");
});
app.use("/", routes);

app.listen(config.PORT, () => {
  console.log(`Server is currently listening on port ${config.PORT}`);
});
