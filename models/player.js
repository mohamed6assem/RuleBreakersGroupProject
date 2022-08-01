// Import
let mongoose = require('mongoose');
const Team = require('./team');

// Create a model class
let playerModel = mongoose.Schema(
    {
        name: String,
        phone: String,
        team: Team       
    },
    {
        collection: "players"
    }
);

module.exports = mongoose.model("Player", playerModel);