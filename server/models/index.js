var db = require('../db');




module.exports = {
  messages: {
    get: function () {
      // db.dbConnection.connect()
      db.dbConnection.query("SELECT * FROM messages;", function(err, result){
        if (err) throw err;
        console.log("MESSAGES GET SUCCESS!", result)
      })
      // db.dbConnection.end()
    }, // a function which produces all the messages
    post: function (username, message, roomname) {
      // db.dbConnection.connect()
      db.dbConnection.query("INSERT INTO messages (username,text,roomname) VALUES (?,?,?);", [username, message, roomname], function(err){
        if (err) throw err;
      })
      // db.dbConnection.end()
      console.log("inside models, messages.post")
     // a function which can be used to insert a message into the database
    }
  },

  users: {
    // Ditto as above.
    get: function () {
      // db.dbConnection.connect()
      db.dbConnection.query('SELECT * FROM users;', function(err, result){
        if (err) throw err;
        console.log("users, GET result",result)
      })
      // db.dbConnection.end()
    },
    post: function (user) {
      //console.log("USER",user)
      // db.dbConnection.connect()
      // db.dbConnection.query("INSERT INTO users (name) VALUES ('"+user+"');", function(err, result, fields){
      db.dbConnection.query('INSERT INTO users (name) VALUES (?);',[user], function(err, result, fields){
        // db.dbConnection.query('SELECT * FROM users;', function(err, result){
        if (err) throw err;
        console.log("POST result",result)
        console.log("query string: ", "INSERT INTO users (name) VALUES ('"+user+"');");
      })
      // db.dbConnection.end()
      
    }
  }
};
