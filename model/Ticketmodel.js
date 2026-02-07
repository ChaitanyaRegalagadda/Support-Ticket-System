const db = require("../db");

const Ticket = {
  create: (user_id, title, description, callback) => {
    db.query(
      "INSERT INTO tickets (user_id, title, description, status, created_at) VALUES (?, ?, ?, 'Open', NOW())",
      [user_id, title, description],
      callback
    );
  },

  getAll: (callback) => {
    db.query("SELECT * FROM tickets", callback);
  },

  update: (id, data, callback) => {
    db.query(
      "UPDATE tickets SET title=?, description=?, status=? WHERE id=?",
      [data.title, data.description, data.status, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query("DELETE FROM tickets WHERE id=?", [id], callback);
  }
};

module.exports = Ticket;
