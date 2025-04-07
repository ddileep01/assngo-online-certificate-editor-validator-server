const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const app = express();
// const PORT = process.env.PORT || 4200;
// const MONGODB_URI = process.env.DATABASE;
const PORT = 4200;
require("./db/conn");
app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "FETCH", "HEAD", "DELETE"],
    allowedHeaders: ["Content-Type"]
  })
);

app.use(express.json());
mongoose.connect(
  "mongodb+srv://haribabu91000:wwnpperHUU2fotQK@cluster0.ykldvtg.mongodb.net/certificateGenerator?retryWrites=true&w=majority"
);

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log("Connected to MongoDB");
// })
// .catch((err) => {
//   console.error("Error connecting to MongoDB:", err.message);
// });
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
