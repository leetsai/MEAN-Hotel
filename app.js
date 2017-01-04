var express = require("express");
var app = express(); // initialize express
var path = require("path"); // a native node module useful for sendFile
var routes = require("./api/routes");

// create a variable called port and give it a value of 1337
app.set('port', 1337);

// this routes helps us achieve separation of concerns
app.use("/api", routes);

// the following is a middleware that console logs all the static files that get
// loaded
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname, "public")));

var server = app.listen(app.get("port"), function() {
  var port = server.address().port;

  console.log("I am ready for magic to happen at " + port);
}); // app.listen is actually an asynchronous operation, which is why we create
    // the anonymous callback.
    // app.listen also returns an object, so we want to assign it to a variable
