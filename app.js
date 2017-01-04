var express = require("express");
var app = express(); // initialize express
var path = require("path"); // a native node module useful for sendFile

app.set('port', 1337); // create a variable called port and give it a value of 1337

app.use(express.static(path.join(__dirname, "public")));

app.get('/json', function(req, res) {
  console.log("GET the JSON");
  res
    .status(200)
    .send( {"jsonData" : true} );
});

app.get('/file', function(req, res) {
  console.log("GET the file");
  res
    .status(200)
    .sendFile(path.join(__dirname, "app.js"));
});

var server = app.listen(app.get("port"), function() {
  var port = server.address().port;

  console.log("I am ready for magic to happen at " + port);
}); // app.listen is actually an asynchronous operation, which is why we create
    // the anonymous callback.
    // app.listen also returns an object, so we want to assign it to a variable
