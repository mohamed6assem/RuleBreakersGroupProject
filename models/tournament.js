// Import
let mongoose = require('mongoose');
const team = require('./team');
const match = require('./match');

// Create a model class
let tournamentModel = mongoose.Schema(
    {
<<<<<<< HEAD
        name: String,
        description: String,
        active: Boolean,
        team1: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
        },//repeat for all teams
        team2: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
        },
        team3: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
        },
        team4: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
        },
        team5: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
        },
        team6: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
        },
        team7: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
        },
        team8: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
        },
=======
        team1: team,
        team2: team,
        team3: team,
        team4: team,
        team5: team,
        team6: team,
        team7: team,
        team8: team,
>>>>>>> parent of cd2cdc3 (website crashed still fixing to add tournaments teams and players)
        
        quarterfinal1: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Match"
        },
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