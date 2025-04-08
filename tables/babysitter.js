const db = require('../db.config.js');


const babysitters_Table = `CREATE TABLE babysitters (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(255) NOT NULL,
  nin VARCHAR(255) NOT NULL UNIQUE,
  age INT NOT NULL CHECK (age BETWEEN 21 AND 35),
  next_of_kin_name VARCHAR(255) NOT NULL,
  next_of_kin_phone VARCHAR(255) NOT NULL
)`; 

const createBabysittersTable = async () => {
    try{
        db.query(babysitters_Table);
        console.log('Babysitters table created successfully');
        }catch (error) {
        console.error('Error creating babysitters table:', error);
    }
    };

// Export the function to create the table
module.exports = {
    createBabysittersTable
};
