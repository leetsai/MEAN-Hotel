var child_process = require("child_process"); // We are spawning a child process
  // to run the fibonacci process so the rest of our app isn't slowed down

console.log("1. This line is immediate");

var new_process = child_process.spawn("node", ["_fibonacci.js"], {
  stdio: "inherit"
});

console.log("2. This line is also immediate");

// This is a demonstration of the single-threaded nature of Node.js, which
// is limiting in the case where there are many processes and many users
