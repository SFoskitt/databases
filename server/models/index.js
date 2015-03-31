var db = require('../db');




module.exports = {
  messages: {
    get: function () {

    }, // a function which produces all the messages
    post: function (message) {
      console.log("inside models")
    // var queryString = 'INSERT INTO messages (text) VALUES ('+message+')'
    // db.dbConnection.connect();
    // db.dbConnection.query(queryString, function(err){
    //   if(err){
    //     console.log("error!!!")
    //   }
    //   console.log("inside messages: ", message)
    // });

    // db.dbConnection.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {
      console.log("in users")
    }
  }
};

