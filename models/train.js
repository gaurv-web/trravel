const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  trainName: String,
  from: String,
  to: String,
  travelDate: Date,
  departureTime: String,
  arrivalTime: String,
  price: Number,
  seatsAvailable: Number,
  classType: String,      // e.g., 'sleeper', 'ac-2tier'
  fareType: {
    type: String,
    enum: ["train-regular", "train-student", "train-senior", "train-forces"],
    default: "train-regular"
  }
});

module.exports = mongoose.model('Train', trainSchema);
