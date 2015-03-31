var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db')



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get();
      console.log("inside controllers, messages.get")        
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("inside controllers")
      models.messages.post(req.body.username, req.body.message, req.body.roomname)
     // a function which handles posting a message to the database
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(result){
      console.log("users result?", result);
      });
      console.log("inside controllers, users.get");
    },
    post: function (req, res) {
      //console.log("inside controllers users.post")
      models.users.post(req.body.username)
    }
  }
}

