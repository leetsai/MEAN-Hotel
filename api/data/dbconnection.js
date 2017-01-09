// this file is used to manage database connection
var MongoClient = require("mongodb").MongoClient;

// this is the connection string (27017 is the MongoDB default port)
var dburl = "mongodb://localhost:27017/meanhotel";

var _connection = null;

// used to open the connection
var open = function() {
  MongoClient.connect(dburl, function(err, db) {
    if (err) {
      console.log("DB connection failed");
    }

    _connection = db;
    console.log("DB connection established", db);
  });
  // set _connection
};

// used to get the connection when it is being created
var get = function() {
  return _connection;
};

// exposing the open and get methods
module.exports = {
  open : open,
  get : get
};
