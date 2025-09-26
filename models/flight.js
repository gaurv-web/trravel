const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flightNumber: String,
  airline: String,
  origin: String,
  destination: String,
  departureDate: Date,
  returnDate: Date, // Optional
  price: Number,
  seatsAvailable: Number,
   fareType: {
    type: String,
    enum: [
      "flight-regular",
  
      "flight-student",
     
      "flight-senior",
      "flight-forces"
    ],
    default: "flight-regular"
  }
});

module.exports = mongoose.model('Flight', flightSchema);
