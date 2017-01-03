console.log("This line is immediate");

require("./_fibonacci.js");

console.log("This line is NOT immediate");

// This is a demonstration of the single-threaded nature of Node.js, which
// is limiting in the case where there are many processes and many users
