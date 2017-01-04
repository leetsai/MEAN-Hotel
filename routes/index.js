var express = require("express");
var router = express.Router();

router
  .route("/json")
  .get(function(req, res) {
    console.log("GET the JSON");
    res
      .status(200)
      .send( {"jsonData" : true} );
  })
  .post(function(req, res) {
    console.log("POST the JSON route");
    res
      .status(200)
      .send( {"jsonData" : "POST received"} );
  });

module.exports = router;
