// controllers control the logic and the functionalies of our routing

var hotelData = require("../data/hotel-data.json");

module.exports.hotelsGetAll = function(req, res) {
  console.log("GET the JSON");
  res
    .status(200)
    .send( hotelData );
};

module.exports.hotelsGetOne = function(req, res) {
  var hotelId = req.params.hotelId;
  var thisHotel = hotelData[hotelId];

  console.log("GET hotelId: ", hotelId);
  res
    .status(200)
    .send( thisHotel );
};
