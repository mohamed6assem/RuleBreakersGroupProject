// Import
let mongoose = require('mongoose');
const team = require('./team');

// Create a model class
let matchModel = mongoose.Schema(
    {
        team1: team,
        team2: team,
        stage: Number,
        date: Date,
        winner: team,
        loser: team       
    },
    {
        collection: "matches"
    }
);

module.exports = mongoose.model("Match", matchModel);