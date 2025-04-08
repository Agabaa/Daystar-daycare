const express = require('express');
const router = express.Router();
const pool = require('../db.config.js'); 

router.post('/register', (req, res) => {
    const { first_name, last_name, email, phone, nin, age, next_of_kin_name, next_of_kin_phone } = req.body;
    
    if (!first_name || !last_name || !phone || !nin || !age || !next_of_kin_name || !next_of_kin_phone) {
      return res.status(400).send({ error: 'All fields are required except email' });
    }

    const sql = 'INSERT INTO babysitters (first_name, last_name, email, phone, nin, age, next_of_kin_name, next_of_kin_phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    pool.query(sql, [first_name, last_name, email, phone, nin, age, next_of_kin_name, next_of_kin_phone], (err, result) => {
        if (err) {
            console.error('Database error:', err); // Log the database error
            return res.status(500).send({ error: err.message });
        }
        res.status(201).send({ id: result.insertId, ...req.body });
    });
});

module.exports = router;
