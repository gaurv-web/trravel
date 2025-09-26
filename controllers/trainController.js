const Train = require('../models/train.js');

exports.searchTrains = async (req, res) => {
    const { from, to, travelDate, classType } = req.body;

    try {
        const query = {};

        if (from) query.from = { $regex: new RegExp(from, "i") };
        if (to) query.to = { $regex: new RegExp(to, "i") };
        if (travelDate) {
            const date = new Date(travelDate);
            const nextDay = new Date(date);
            nextDay.setDate(date.getDate() + 1);
            query.travelDate = { $gte: date, $lt: nextDay };
        }
        if (classType) query.classType = classType;

        const trains = await Train.find(query);

        if (!trains.length) return res.status(404).json({ message: "No trains found" });

        res.json(trains);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};
