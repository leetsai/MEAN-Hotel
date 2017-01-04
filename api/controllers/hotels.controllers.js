// controllers control the logic and the functionalies of our routing

var hotelData = require("../data/hotel-data.json");

module.exports.hotelsGetAll = function(req, res) {
  console.log("GET the JSON");
  res
    .status(200)
    .send( hotelData );
};
