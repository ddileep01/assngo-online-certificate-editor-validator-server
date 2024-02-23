const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const app = express();
// const PORT = process.env.PORT;
const PORT = 4200;
require("./db/conn");
app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "FETCH", "HEAD"],
  })
);

app.use(express.json());
mongoose.connect(
  "mongodb+srv://haribabu91000:wwnpperHUU2fotQK@cluster0.ykldvtg.mongodb.net/certificateGenerator?retryWrites=true&w=majority"
);
app.use(require("./router/auth"));
app.get("/", (req, res) => {
  res.send("hello guys i am from server ");
});
app.get("/login", (req, res) => {
  res.send("this is from login page ");
});

app.listen(PORT, () => {
  console.log("server code is running");
});
