var models = require('../models');
var express = require('express'); 

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      // res.send(req.body);
      // models.messages.get(function(err, results){
      //   console.log('send back!!!!!!!!!!!!!!')
      //   res.writeHead(201);
      //   res.send(JSON.stringify(results))
      // })
     models.messages.get(function(data){
       res.status(201);
       res.send(JSON.stringify(data))
     });

    }, 
    post: function (req, res) {
      models.messages.post(req.body, function(){
        res.send("WE DID IT!!!!")
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(data){
       res.status(201);
       res.send(JSON.stringify(data))
     });
    },
    post: function (req, res) {
      models.users.post(req.body, function(){
        res.send("User post completed!!!!!!!!!")
      })
    }
  }
};

//what you do with the data you get 