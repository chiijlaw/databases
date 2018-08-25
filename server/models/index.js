var db = require('../db');
var Sequelize = require('sequelize');

var sequelize = new Sequelize ('chat', 'student', 'student',{
  host: 'localhost',
  port: 3000,
  dialect: 'mysql'
});

var Messages = sequalize.define('messages', {
  id: {
    type: Sequelize.INTEGER
  },
  messages: {
    type: Sequelize.STRING
  },
  users_id: {
    type: Sequelize.INTEGER
  }
});

var Users = sequalize.define('users', {
  id: {
    type: Sequelize.INTEGER
  },
  username: {
    type: Sequelize.STRING
  }
});


module.exports = {
  messages: {
    get: function () { // a function which produces all the messages
      sequelize.connection.messages
    }, 
    post: function () { // a function which can be used to insert a message into the database
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

//asyncrhonous
//how we get data from the database