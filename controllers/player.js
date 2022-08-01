// create a reference to the model
let PlayerModel = require('../models/player');

// Gets all players from the Database and renders the page to list them all.
module.exports.playerList = function(req, res, next) {  
    PlayerModel.find((err, playersList) => {
        //console.log(playerList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('players/list', {
                title: 'Players List', 
                PlayersList: playersList,
                userName: req.user ? req.user.username : ''
            })            
        }
    });
}


// Gets a player by id and renders the details page.
module.exports.details = (req, res, next) => {
    
    let id = req.params.id;

    PlayerModel.findById(id, (err, playerToShow) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('players/details', {
                title: 'Player Details', 
                player: playerToShow
            })
        }
    });
}

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
    
    let newPlayer = PlayerModel();
    
    res.render('players/add_edit', {
        title: 'Add a New Player',
        player: newPlayer,
        userName: req.user ? req.user.username : ''
    });

}

// Processes the data submitted from the Add form to create a new player
module.exports.processAddPage = (req, res, next) => {

    let newPlayer = PlayerModel({
        //_id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        team: req.body.team,

    });
//shows error and redirects user to player list if there is no error
    PlayerModel.create(newPlayer, (err, player)=>{
    if(err){
        console.log(err);
        res.end(err);
    }
    else{
        console.log(player);
        res.redirect('/players/list');
    }
});

}

// Gets a player by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
    
    let id = req.params.id;

    PlayerModel.findById(id, (err, playerToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('players/add_edit', {
               title: 'Edit Player',
               player: playerToEdit,
               userName: req.user ? req.user.username : '' 
            })
        }

    });

}

// Processes the data submitted from the Edit form to update a player
module.exports.processEditPage = (req, res, next) => {
    
    let id = req.params.id;

    let updatedPlayer = PlayerModel({
        _id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        team: req.body.team,

    });

    PlayerModel.updateOne({_id: id}, updatedPlayer, (err)=>{
    if(err){
        console.log(err);
        res.end(err);
    }
    else{
        //console.log(player);
        res.redirect('/players/list');
    }
});
    
}

// Deletes a player based on its id.
module.exports.performDelete = (req, res, next) => {
    
    let id = req.params.id;

    PlayerModel.remove({_id: id}, (err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            
            res.redirect('/players/list');
        }
    });
}