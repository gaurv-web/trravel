const Flight = require('../models/flight.js');

// Search flights based on query parameters
exports.searchFlights = async (req, res) => {
  const { origin, destination, departureDate, returnDate, fareType } = req.body;

  try {
    const query = {};

    // Match origin (case-insensitive)
    if (origin) {
      query.origin = { $regex: new RegExp(origin, "i") };
    }

    // Match destination (case-insensitive)
    if (destination) {
      query.destination = { $regex: new RegExp(destination, "i") };
    }

    // Match departureDate (ignore time)
    if (departureDate) {
      const depDate = new Date(departureDate);
      const depNextDay = new Date(depDate);
      depNextDay.setDate(depDate.getDate() + 1);
      query.departureDate = { $gte: depDate, $lt: depNextDay };
    }

    // Match returnDate (ignore time)
    if (returnDate) {
      const retDate = new Date(returnDate);
      const retNextDay = new Date(retDate);
      retNextDay.setDate(retDate.getDate() + 1);
      query.returnDate = { $gte: retDate, $lt: retNextDay };
    }

    // Only filter by fareType if DB actually has this field
    if (fareType) {
      query.fareType = fareType;
    }

    // Fetch matching flights
    const flights = await Flight.find(query);

    // Return result
    if (!flights.length) {
      return res.status(404).json({ message: "No flights found for your search" });
    }

    res.json(flights);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
