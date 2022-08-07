// Import
let mongoose = require('mongoose');

// Create a model class
let tournamentModel = mongoose.Schema(
    {
        name: String,
        description: String,
        status: String,
        match1: {
            player1: String,
            player2: String,
            winner: Number
        },
        match2: {
            player3: String,
            player4: String,
            winner: Number
        },
        match3: {
            player5: String,
            player6: String,
            winner: Number
        },
        match4: {
            player7: String,
            player8: String,
            winner: Number
        },
        
        semifinal1: {
            semiplayer1: String,
            semiplayer2: String,
            winner: Number
        },
        semifinal2: {
            semiplayer3: String,
            semiplayer4: String,
            winner: Number
        },

        final: {
            finalplayer1: String,
            finalplayer2: String,
            winner: Number
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },

    {
        collection: "tournaments"
    }
);

module.exports = mongoose.model("Tournament", tournamentModel);