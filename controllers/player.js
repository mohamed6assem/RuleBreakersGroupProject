// create a reference to the model
let CarModel = require('../models/player');

// Gets all players from the Database and renders the page to list them all.
module.exports.playerList = function(req, res, next) {  
    CarModel.find((err, playersList) => {
        //console.log(playerList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('players/list', {
                title: 'Cars List', 
                CarsList: playersList,
                userName: req.user ? req.user.username : ''
            })            
        }
    });
}


// Gets a player by id and renders the details page.
module.exports.details = (req, res, next) => {
    
    let id = req.params.id;

    CarModel.findById(id, (err, playerToShow) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('players/details', {
                title: 'Car Details', 
                player: playerToShow
            })
        }
    });
}

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
    
    let newCar = CarModel();
    
    res.render('players/add_edit', {
        title: 'Add a New Car',
        player: newCar,
        userName: req.user ? req.user.username : ''
    });

}

// Processes the data submitted from the Add form to create a new player
module.exports.processAddPage = (req, res, next) => {

    let newCar = CarModel({
        //_id: req.body.id,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        kilometers: req.body.kilometers,
        doors: req.body.doors,
        seats: req.body.seats,
        color: req.body.color,
        price: req.body.price  

    });
//shows error and redirects user to player list if there is no error
    CarModel.create(newCar, (err, player)=>{
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

    CarModel.findById(id, (err, playerToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('players/add_edit', {
               title: 'Edit Car',
               player: playerToEdit,
               userName: req.user ? req.user.username : '' 
            })
        }

    });

}

// Processes the data submitted from the Edit form to update a player
module.exports.processEditPage = (req, res, next) => {
    
    let id = req.params.id;

    let updatedCar = CarModel({
        _id: req.body.id,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        kilometers: req.body.kilometers,
        doors: req.body.doors,
        seats: req.body.seats,
        color: req.body.color,
        price: req.body.price  

    });

    CarModel.updateOne({_id: id}, updatedCar, (err)=>{
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

    CarModel.remove({_id: id}, (err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            
            res.redirect('/players/list');
        }
    });
}