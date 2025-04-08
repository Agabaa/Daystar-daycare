const pool = require('../db.config.js');

const payments_Table = `CREATE TABLE payments (id INT AUTO_INCREMENT PRIMARY KEY,
  babysitter_id INT NOT NULL,
  date DATE NOT NULL,
  session_type ENUM('half-day', 'full-day') NOT NULL,
  number_of_children INT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (babysitter_id) REFERENCES babysitters(id)
);`

const createPayments_table = async () => {
    try{
        pool.query(payments_Table);
        console.log('Payments table created successfully');
        }catch (error) {
        console.error('Error creating payments table:', error);
    }
    };
// Export the function to create the table
module.exports = {
    createPayments_table
};