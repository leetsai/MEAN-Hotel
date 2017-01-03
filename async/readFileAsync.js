var fs = require("fs");

console.log("Going to get a file");

var onFileload = function(err, file) {
  console.log("Got the file")
};

fs.readFile("readFileSync.js", onFileload); // onFileload is a named callback (syntatic sugar)

console.log("App continues...");
