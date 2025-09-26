const Bus = require('../models/buses.js');

// Search buses based on query parameters
exports.searchBuses = async (req, res) => {
  const { from, to, travelDate, fareType } = req.body;

  try {
    const query = {};

    // Match from (case-insensitive)
    if (from) {
      query.from = { $regex: new RegExp(from, "i") };
    }

    // Match to (case-insensitive)
    if (to) {
      query.to = { $regex: new RegExp(to, "i") };
    }

    // Match travelDate (ignore time)
    if (travelDate) {
      const tDate = new Date(travelDate);
      const tNextDay = new Date(tDate);
      tNextDay.setDate(tDate.getDate() + 1);
      query.travelDate = { $gte: tDate, $lt: tNextDay };
    }

    // Filter by fareType
    if (fareType) {
      query.fareType = fareType;
    }

    const buses = await Bus.find(query);

    if (!buses.length) {
      return res.status(404).json({ message: "No buses found for your search" });
    }

    res.json(buses);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
