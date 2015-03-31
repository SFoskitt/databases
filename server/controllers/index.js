var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db')



module.exports = {
  messages: {
    get: function (req, res) {

        
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //db.dbConnection.connect();
      console.log("DATABASE:",db)
      console.log(req.body.username)
   //    req.on('data', function(data){
   //      var parseData = JSON.parse(data);

   //      models.messages.post(parseData.message);
   //    }, function (err){
   //      if (err) throw err;
   //    }) // a function which handles posting a message to the database
   // }
}
},

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      db.dbConnection.connect()
      db.dbConnection.query("INSERT INTO users (name) VALUES ("+req.body.username+");")
      db.dbConnection.end()
      console.log("inside users controller")
    }
  }
};

