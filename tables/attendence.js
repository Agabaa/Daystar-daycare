const db = require('../db.config.js');

const attendence_table = `CREATE TABLE attendance (
  id INT AUTO_INCREMENT PRIMARY KEY,
  babysitter_id INT NOT NULL,
  date DATE NOT NULL,
  present BOOLEAN NOT NULL DEFAULT FALSE,
  FOREIGN KEY (babysitter_id) REFERENCES babysitters(id)
);`

const createattendence_table = async () => {
    try{
        db.query(attendence_table);
        console.log('Attendence table created successfully');
        }catch (error) {
        console.error('Error creating attendence table:', error);
    }
    };
// Export the function to create the table
module.exports = {
    createattendence_table
};