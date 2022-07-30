// Import
let mongoose = require('mongoose');

// Create a model class
let playerModel = mongoose.Schema(
    {
        make: String,
        model: String,
        year: Number,
        kilometers: Number,
        doors: Number,
        seats: Number,
        color: String,
        price: Number        
    },
    {
        collection: "players"
    }
);

module.exports = mongoose.model("Car", playerModel);