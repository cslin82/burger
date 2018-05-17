const mysql = require('mysql');

// localhost burger nopassword 

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "burger",
    password: "",
    database: "burgers_db"
  });
  
  // Make connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  

module.exports = connection;