var mysql = require('mysql');
// var Sequelize = require('sequelize');

exports.connection = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'chat'
});

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


