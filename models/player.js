// Import
let mongoose = require('mongoose');

// Create a model class
let playerModel = mongoose.Schema(
    {
        name: String,
        age: Number,
        phone: String,
        team: String       
    },
    {
        collection: "players"
    }
);

module.exports = mongoose.model("Player", playerModel);