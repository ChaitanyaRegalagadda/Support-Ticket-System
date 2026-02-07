const Ticket = require("../models/ticketModel");

exports.createTicket = (req, res) => {
  const { user_id, title, description } = req.body;
  Ticket.create(user_id, title, description, (err, result) => {
    if (err) return res.status(500).json({ message: "Error creating ticket", error: err });
    res.json({ message: "Ticket created", ticketId: result.insertId });
  });
};

exports.getTickets = (req, res) => {
  Ticket.getAll((err, results) => {
    if (err) return res.status(500).json({ message: "Error fetching tickets", error: err });
    res.json(results);
  });
};
