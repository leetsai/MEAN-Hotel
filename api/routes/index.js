var express = require("express");
var router = express.Router();
var ctrlHotels = require("../controllers/hotels.controllers.js");

router
  .route("/hotels")
  .get(ctrlHotels.hotelsGetAll);

router
  .route("/hotels/:hotelId") // Express parameter indicated by ":"
  .get(ctrlHotels.hotelsGetOne);

module.exports = router;
