const User = require("../models/User");


const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const secretKey = "mysecretkey";

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  User.create(name, email, password, (err, result) => {
    if (err) return res.status(500).json({ message: "Error creating user", error: err });
    res.json({ message: "User registered successfully" });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email, (err, results) => {
    if (err || results.length === 0) return res.status(400).json({ message: "User not found" });

    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

      const token = jwt.sign({ user_id: results[0].id }, secretKey, { expiresIn: "1h" });
      res.json({ token, user: results[0] });
    });
  });
};
