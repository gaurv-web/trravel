// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Flight = require('./models/flight.js'); // Correct relative path

// dotenv.config();

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('MongoDB connected');
//   insertDummyFlights();
// }).catch((err) => {
//   console.error('MongoDB connection error:', err);
// });

// async function insertDummyFlights() {
//   try {
//     const flights = [
//       {
//         flightNumber: 'AI101',
//         airline: 'Air India',
//         origin: 'Delhi',
//         destination: 'Mumbai',
//         departureDate: new Date('2025-09-25T09:00:00'),
//         returnDate: new Date('2025-09-30T10:00:00'),
//         price: 4500,
//         seatsAvailable: 120,
//         fareType: 'flight-regular'
//       },
//       {
//         flightNumber: 'IN204',
//         airline: 'IndiGo',
//         origin: 'Bangalore',
//         destination: 'Kolkata',
//         departureDate: new Date('2025-10-01T07:30:00'),
//         returnDate: new Date('2025-10-10T08:00:00'),
//         price: 3800,
//         seatsAvailable: 90,
//         fareType: 'flight-student'
//       },
//       {
//         flightNumber: 'SG909',
//         airline: 'SpiceJet',
//         origin: 'Chennai',
//         destination: 'Goa',
//         departureDate: new Date('2025-09-27T15:00:00'),
//         returnDate: new Date('2025-10-03T17:30:00'),
//         price: 5100,
//         seatsAvailable: 60,
//         fareType: 'flight-senior'
//       },
//       {
//         flightNumber: 'UK305',
//         airline: 'Vistara',
//         origin: 'Delhi',
//         destination: 'Pune',
//         departureDate: new Date('2025-09-26T06:00:00'),
//         returnDate: new Date('2025-09-29T12:00:00'),
//         price: 5600,
//         seatsAvailable: 85,
//         fareType: 'flight-forces'
//       },
//       {
//         flightNumber: 'G8107',
//         airline: 'Go First',
//         origin: 'Ahmedabad',
//         destination: 'Hyderabad',
//         departureDate: new Date('2025-09-28T13:00:00'),
//         returnDate: new Date('2025-10-05T13:00:00'),
//         price: 4300,
//         seatsAvailable: 100,
//         fareType: 'flight-senior'
//       }
//     ];

//     await Flight.insertMany(flights);
//     console.log('Dummy flight data inserted successfully.');
//     process.exit();
//   } catch (err) {
//     console.error('Error inserting flights:', err);
//     process.exit(1);
//   }
// }




// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Bus = require('./models/buses.js'); // Make sure path is correct

// dotenv.config();

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('MongoDB connected');
//   insertDummyBuses();
// }).catch((err) => {
//   console.error('MongoDB connection error:', err);
// });

// async function insertDummyBuses() {
//   try {
//     const buses = [
//       {
//         busNumber: 'DL-AG-101',
//         busName: 'RedLine Express',
//         from: 'Delhi',
//         to: 'Agra',
//         travelDate: new Date('2025-09-27T08:00:00'),
//         departureTime: '08:00',
//         arrivalTime: '12:00',
//         price: 500,
//         seatsAvailable: 40,
//         fareType: 'bus-regular'
//       },
//       {
//         busNumber: 'DL-JA-204',
//         busName: 'BlueLine Travels',
//         from: 'Delhi',
//         to: 'Jaipur',
//         travelDate: new Date('2025-09-27T09:00:00'),
//         departureTime: '09:00',
//         arrivalTime: '14:00',
//         price: 600,
//         seatsAvailable: 35,
//         fareType: 'bus-student'
//       },
//       {
//         busNumber: 'AG-DL-305',
//         busName: 'GreenLine Express',
//         from: 'Agra',
//         to: 'Delhi',
//         travelDate: new Date('2025-09-28T07:00:00'),
//         departureTime: '07:00',
//         arrivalTime: '11:00',
//         price: 500,
//         seatsAvailable: 40,
//         fareType: 'bus-senior'
//       },
//       {
//         busNumber: 'MU-PU-406',
//         busName: 'YellowLine Travels',
//         from: 'Mumbai',
//         to: 'Pune',
//         travelDate: new Date('2025-09-29T06:30:00'),
//         departureTime: '06:30',
//         arrivalTime: '10:30',
//         price: 450,
//         seatsAvailable: 50,
//         fareType: 'bus-forces'
//       },
//       {
//         busNumber: 'HY-AH-507',
//         busName: 'OrangeLine Express',
//         from: 'Hyderabad',
//         to: 'Ahmedabad',
//         travelDate: new Date('2025-09-30T13:00:00'),
//         departureTime: '13:00',
//         arrivalTime: '22:00',
//         price: 700,
//         seatsAvailable: 45,
//         fareType: 'bus-regular'
//       }
//     ];

//     await Bus.insertMany(buses);
//     console.log('Dummy bus data inserted successfully.');
//     process.exit();
//   } catch (err) {
//     console.error('Error inserting buses:', err);
//     process.exit(1);
//   }
// }


const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Train = require('./models/train.js');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
    insertDummyTrains();
}).catch(err => console.log(err));

async function insertDummyTrains() {
    try {
       const trains = [
  {
    trainName: "Rajdhani Express",
    from: "Delhi",
    to: "Mumbai",
    travelDate: new Date("2025-09-26"),
    departureTime: "18:00",
    arrivalTime: "06:00",
    price: 2500,
    seatsAvailable: 100,
    classType: "ac-3tier",
    fareType: "train-regular"
  },
  {
    trainName: "Shatabdi Express",
    from: "Bangalore",
    to: "Chennai",
    travelDate: new Date("2025-09-27"),
    departureTime: "07:00",
    arrivalTime: "12:30",
    price: 1800,
    seatsAvailable: 120,
    classType: "ac-sleeper",
    fareType: "train-student"
  },
  {
    trainName: "Duronto Express",
    from: "Kolkata",
    to: "Delhi",
    travelDate: new Date("2025-09-28"),
    departureTime: "20:00",
    arrivalTime: "08:00",
    price: 3000,
    seatsAvailable: 80,
    classType: "ac-2tier",
    fareType: "train-senior"
  },
  {
    trainName: "Jan Shatabdi",
    from: "Mumbai",
    to: "Pune",
    travelDate: new Date("2025-09-29"),
    departureTime: "06:30",
    arrivalTime: "09:30",
    price: 800,
    seatsAvailable: 150,
    classType: "sleeper",
    fareType: "train-regular"
  },
  {
    trainName: "Kolkata Rajdhani",
    from: "Kolkata",
    to: "New Delhi",
    travelDate: new Date("2025-09-30"),
    departureTime: "17:00",
    arrivalTime: "08:50",
    price: 3200,
    seatsAvailable: 90,
    classType: "ac-3tier",
    fareType: "train-forces"
  },
  {
    trainName: "Mumbai Duronto",
    from: "Mumbai",
    to: "Ahmedabad",
    travelDate: new Date("2025-10-01"),
    departureTime: "05:30",
    arrivalTime: "12:00",
    price: 1200,
    seatsAvailable: 200,
    classType: "sleeper",
    fareType: "train-regular"
  },
  {
    trainName: "Howrah Express",
    from: "Kolkata",
    to: "Pune",
    travelDate: new Date("2025-10-02"),
    departureTime: "14:00",
    arrivalTime: "06:00",
    price: 2800,
    seatsAvailable: 70,
    classType: "ac-2tier",
    fareType: "train-student"
  },
  {
    trainName: "Chennai Shatabdi",
    from: "Chennai",
    to: "Bangalore",
    travelDate: new Date("2025-10-03"),
    departureTime: "08:00",
    arrivalTime: "13:00",
    price: 1500,
    seatsAvailable: 120,
    classType: "ac-sleeper",
    fareType: "train-senior"
  }
];


        await Train.insertMany(trains);
        console.log('Dummy train data inserted successfully.');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
