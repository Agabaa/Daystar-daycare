const db = require('../db.config.js');

const schedules_Table = `CREATE TABLE schedules (
  id INT AUTO_INCREMENT PRIMARY KEY,
  babysitter_id INT NOT NULL,
  date DATE NOT NULL,
  session_type ENUM('half-day', 'full-day') NOT NULL,
  FOREIGN KEY (babysitter_id) REFERENCES babysitters(id)
);`

const createschedules_table = async () => {
    try{
        db.query(schedules_Table);
        console.log('schedules table created successfully');
        }catch (error) {
        console.error('Error creating schedules table:', error);
    }
    };
// Export the function to create the table
module.exports = {
    createschedules_table
};