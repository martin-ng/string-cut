const express = require("express");
const morgan = require("morgan");

const routes = require("./routes");
const config = require("./config/config");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/", routes);

app.listen(config.PORT, () => {
  console.log(`Server is currently listening on port ${config.PORT}`);
});
