const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const connectDB = require("./db/conn");

const app = express();
const PORT = 4200;

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "DELETE", "HEAD", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Handle CORS preflight requests
app.options("*", cors(corsOptions));
app.use(cors(corsOptions));

app.use(express.json());

// Ensure DB is connected before processing any request
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

app.get("/", (_req, res) => {
  res.send("Akhanda Seva Samsthan NGO server is running...");
});

app.listen(PORT, () => {
  console.log("server code is running");
});

module.exports = app;
