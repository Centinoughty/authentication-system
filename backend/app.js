const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { connectDb } = require("./config/db");

// Iniitialization
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Listen on port
connectDb();
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
