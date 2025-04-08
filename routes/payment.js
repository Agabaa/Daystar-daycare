const express = require('express');
const router = express.Router();
const db = require('../db.config.js'); 
router.post('/create', (req, res) => {
  const { babysitter_id, session_type, number_of_children } = req.body;
  const amount = session_type === 'half-day' ? 2000 * number_of_children : 5000 * number_of_children;
  const sql = 'INSERT INTO payments (babysitter_id, date, session_type, number_of_children, amount) VALUES (?, CURDATE(), ?, ?, ?)';
  db.query(sql, [babysitter_id, session_type, number_of_children, amount], (err, result) => {
    if (err) return res.status(400).send(err);
    res.status(201).send({ id: result.insertId, babysitter_id, session_type, number_of_children, amount });
  });
});

module.exports = router;