const express = require("express");
const morgan = require("morgan");

const routes = require("./routes");
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`Server is currently listening on port ${PORT}`);
});
