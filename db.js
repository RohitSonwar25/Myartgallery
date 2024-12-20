// db.js
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',   // The database host (use your MySQL server address)
  user: 'root',        // Your MySQL username (e.g., 'root')
  password: 'Rohit19@!',// Your MySQL password (replace with your actual password)
  database: 'market'  // The name of the database you want to connect to
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log("Connected to the database");
});

// Export the connection
module.exports = connection;
