var db = require('../db');




module.exports = {
  messages: {
    get: function () {

    }, // a function which produces all the messages
    post: function (message) {
    var queryString = 'INSERT INTO messages (text) VALUES (message)'
    db.dbConnection.connect();
    dbConnection.query(queryString, function(err){
      if(err){
        throw err;
      }
    });
    db.dbConnection.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

