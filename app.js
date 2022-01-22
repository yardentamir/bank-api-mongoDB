require("dotenv").config();
require("./server/db/mongoose");
const express = require("express");
const userRouter = require("./server/routes/users");
const cors = require("cors");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname, "client/build");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.static(publicPath));

app.use("/api/users", userRouter);

app.get("*", (req, res) => {
  console.log("not found");
  res.sendFile(path.resolve(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
