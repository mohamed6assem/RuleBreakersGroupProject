// Import
let mongoose = require('mongoose');
const team = require('./team');
const match = require('./match');

// Create a model class
let tournamentModel = mongoose.Schema(
    {
        name: String,
        description: String,
        active: Boolean,
        team1: team,
        team2: team,
        team3: team,
        team4: team,
        team5: team,
        team6: team,
        team7: team,
        team8: team,
        
        quarterfinal1: match,
        quarterfinal2: match,
        quarterfinal3: match,
        quarterfinal4: match,

        semifinal1: match,
        semifinal2: match,

        finalmatch: match,

    },
    {
        collection: "tournaments"
    }
);

module.exports = mongoose.model("Tournament", tournamentModel);