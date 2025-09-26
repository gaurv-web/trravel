const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  busNumber: String,
  busName: String,
  from: String,
  to: String,
  travelDate: Date,
  departureTime: String,
  arrivalTime: String,
  price: Number,
  seatsAvailable: Number,
  fareType: {
    type: String,
    enum: [
      "bus-regular",
      "bus-student",
      "bus-senior",
      "bus-forces"
    ],
    default: "bus-regular"
  }
});

module.exports = mongoose.model('Bus', busSchema);
