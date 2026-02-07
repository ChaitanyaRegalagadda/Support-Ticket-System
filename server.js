const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");

dotenv.config(); // Load .env file

connectDB(); // ✅ Connect MongoDB

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Database Connected Successfully 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
