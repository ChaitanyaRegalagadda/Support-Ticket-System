const db = require("../db");
const bcrypt = require("bcrypt");

const User = {
  create: (name, email, password, callback) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return callback(err);
      db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hash], callback);
    });
  },

  findByEmail: (email, callback) => {
    db.query("SELECT * FROM users WHERE email = ?", [email], callback);
  }
};

module.exports = User;
