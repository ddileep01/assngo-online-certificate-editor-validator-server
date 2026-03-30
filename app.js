const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const connectDB = require("./db/conn");

const app = express();
const PORT = 4200;

app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "FETCH", "HEAD", "DELETE"],
    allowedHeaders: ["Content-Type"]
  })
);

app.use(express.json());

app.use(async (_req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("DB connection error:", err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

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

module.exports = app;
