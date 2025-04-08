const express = require('express');
const router = express.Router();
const pool = require('../db.config.js'); 
router.post('/create', (req, res) => {
  const { babysitter_id, date, session_type } = req.body;
  const sql = 'INSERT INTO schedules (babysitter_id, date, session_type) VALUES (?, ?, ?)';
  pool.query(sql, [babysitter_id, date, session_type], (err, result) => {
    if (err) return res.status(400).send(err);
    res.status(201).send({ id: result.insertId, babysitter_id, date, session_type });
  });
});

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM schedules';
  pool.query(sql, (err, results) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(results);
  });
});

module.exports = router;