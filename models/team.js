// Import
let mongoose = require('mongoose');
const player = require('./player');
// Create a model class
let teamModel = mongoose.Schema(
    {
        captain: player,
        player1: player,
        player2: player,  
        player3: player,   
        player4: player,
        player5: player,
        player6: player,
        player7: player,  
        player8: player,   
        player9: player, 
    },
    {
        collection: "teams"
    }
);

module.exports = mongoose.model("Team", teamModel);