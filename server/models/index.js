var db = require('../db');
// var Sequelize = require('sequelize');

// var sequelize = new Sequelize ('chat', 'student', 'student',{
//   host: 'localhost',
//   port: 3000,
//   dialect: 'mysql'
// });

// var Messages = sequalize.define('messages', {
//   id: {
//     type: Sequelize.INTEGER
//   },
//   messages: {
//     type: Sequelize.STRING
//   },
//   users_id: {
//     type: Sequelize.INTEGER
//   }
// });

// var Users = sequalize.define('users', {
//   id: {
//     type: Sequelize.INTEGER
//   },
//   username: {
//     type: Sequelize.STRING
//   }
// });


module.exports = {
  messages: {
    get: function (callback) { // a function which produces all the messages
      db.connection.query("SELECT * FROM messages", function(err, results){
        if (err){
          throw err;
        } else {
          callback(null, results);
        }
      });
    }, 
    post: function (body, callback) { // a function which can be used to insert a message into the database
      db.connection.query(`INSERT INTO messages (message) VALUES ("${body.message}")`, function(err, results){
          if (err) {
            throw err; 
          } else {
            callback();
          }
      })
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.connection.query("SELECT * FROM users", function(error, results) {
        if (error) {
          throw error;
        } else {
          callback(results);
        }
      })
    },
    post: function (body, callback) {
      console.log(body.username);
      db.connection.query(`INSERT INTO users (username) VALUES ("${body.username}")`, function(error, results) {
            if (error) {
            throw error; 
          } else {
            callback(error, results);
          }
      })
    }
  }
};

//asyncrhonous
//how we get data from the database