const express = require('express');
const router = express.Router();
const pool = require('../db.config.js');  // Assuming you have a db.js file to handle DB connection

router.post('/mark', (req, res) => {
  const { babysitter_id, date, present } = req.body;
  const sql = 'INSERT INTO attendance (babysitter_id, date, present) VALUES (?, ?, ?)';
  pool.query(sql, [babysitter_id, date, present], (err, result) => {
    if (err) return res.status(400).send(err);
    res.status(201).send({ id: result.insertId, babysitter_id, date, present });
  });
});

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM attendance';
  pool.query(sql, (err, results) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(results);
  });
});

module.exports = router;