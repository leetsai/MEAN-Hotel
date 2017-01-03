var express = require("express");

var app = express(); // initialize express

app.set('port', 1337); // create a variable called port and give it a value of 1337

var server = app.listen(app.get("port"), function() {
  var port = server.address().port;

  console.log("I am ready for magic to happen at " + port);
}); // app.listen is actually an asynchronous operation, which is why we create
    // the anonymous callback.
    // app.listen also returns an object, so we want to assign it to a variable
