require("dotenv").config();
require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const path = require("path");
const userRouter = require("./routes/users");

const app = express();

const publicPath = path.join(__dirname, "./server/client/build");
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static(publicPath));

app.use("/api/users", userRouter);

app.use("*", (req, res) => {
  res.status(500).send("route is not found");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
