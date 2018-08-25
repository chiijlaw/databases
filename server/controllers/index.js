var models = require('../models');
var express = require('express'); 

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      // res.send('HEEEEEEEEEEEEYYYYYYYYYYY');

    }, 
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

//what you do with the data you get 