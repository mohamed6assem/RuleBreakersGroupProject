// Import
//delete this model
let mongoose = require('mongoose');
const player = require('./player');
// Create a model class
let teamModel = mongoose.Schema(
    {
        name: String,
        //captain: player,
        player1: player,
        player2: player,  
        player3: player,   
        player4: player,
        player5: player,
        player6: player,
        player7: player,  
        player8: player,   
        player9: player,
        player10: player 
    },
    {
        collection: "teams"
    }
);

module.exports = mongoose.model("Team", teamModel);