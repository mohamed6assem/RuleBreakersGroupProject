// create a reference to the model
let TournamentModel = require('../models/tournaments');

// Gets all tournaments from the Database and renders the page to list them all.
module.exports.tournamentList = function(req, res, next) {  
    TournamentModel.find((err, tournamentsList) => {
        //console.log(tournamentList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('tournaments/list', {
                title: 'Tournaments List', 
                TournamentsList: tournamentsList,
                userName: req.user ? req.user.username : ''
            })            
        }
    });
}


// Gets a tournament by id and renders the details page.
module.exports.details = (req, res, next) => {
    
    let id = req.params.id;

    TournamentModel.findById(id, (err, tournamentToShow) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('tournaments/details', {
                title: 'Tournament Details', 
                tournament: tournamentToShow
            })
        }
    });
}

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
    
    let newTournament = TournamentModel();
    
    res.render('tournaments/add_edit', {
        title: 'Add a New Tournament',
        tournament: newTournament,
        userName: req.user ? req.user.username : ''
    });

}

// Processes the data submitted from the Add form to create a new tournament
module.exports.processAddPage = (req, res, next) => {

    let newTournament = TournamentModel({
        _id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        match1: {
            player1: req.body.player1,
            player2: req.body.player2,
            winner1: req.body.winner1,
        },
        match2: {
            player3: req.body.player3,
            player4: req.body.player4,
            winner2: req.body.winner2,
        },
        match3: {
            player5: req.body.player5,
            player6: req.body.player6,
            winner3: req.body.winner3,
        },
        match4: {
            player7: req.body.player7,
            player8: req.body.player8,
            winner4: req.body.winner4,
        },
        
        semifinal1: {
            //semiplayer1: (req.body.winner1=1 ? req.body.player1 : req.body.player2),
            semiplayer1: req.body.semiplayer1,
            semiplayer2: req.body.semiplayer2,
            winnersf1: req.body.winnersf1,
        },
        semifinal2: {
            semiplayer3: req.body.semiplayer3,
            semiplayer4: req.body.semiplayer4,
            winnersf2: req.body.winnersf2,
        },

        final: {
            finalplayer1: req.body.finalplayer1,
            finalplayer2: req.body.finalplayer2,
            winnerfinal: req.body.winnerfinal,
        },
        owner: (req.body.owner == null || req.body.owner == "")? req.payload?.id : req.body.owner
    });
//shows error and redirects user to tournament list if there is no error
    TournamentModel.create(newTournament, (err, tournament)=>{
    if(err){
        console.log(err);
        res.end(err);
    }
    else{
        console.log(tournament);
        res.redirect('/tournaments/list');
    }
});

}

// Gets a tournament by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
    
    let id = req.params.id;

    TournamentModel.findById(id, (err, tournamentToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('tournaments/add_edit', {
               title: 'Edit Tournament',
               tournament: tournamentToEdit,
               userName: req.user ? req.user.username : '' 
            })
        }

    });

}

// Processes the data submitted from the Edit form to update a tournament
module.exports.processEditPage = (req, res, next) => {
    
    let id = req.params.id;

    let updatedTournament = TournamentModel({
        _id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        match1: {
            player1: req.body.player1,
            player2: req.body.player2,
            winner1: req.body.winner1,
        },
        match2: {
            player3: req.body.player3,
            player4: req.body.player4,
            winner2: req.body.winner2,
        },
        match3: {
            player5: req.body.player5,
            player6: req.body.player6,
            winner3: req.body.winner3,
        },
        match4: {
            player7: req.body.player7,
            player8: req.body.player8,
            winner4: req.body.winner4,
        },
        
        semifinal1: {
            semiplayer1: req.body.semiplayer1,
            semiplayer2: req.body.semiplayer2,
            winnersf1: req.body.winnersf1,
        },
        semifinal2: {
            semiplayer3: req.body.semiplayer3,
            semiplayer4: req.body.semiplayer4,
            winnersf2: req.body.winnersf2,
        },

        final: {
            finalplayer1: req.body.finalplayer1,
            finalplayer2: req.body.finalplayer2,
            winnerfinal: req.body.winnerfinal,
        },
        owner: (req.body.owner == null || req.body.owner == "")? req.payload?.id : req.body.owner
    });

    TournamentModel.updateOne({_id: id}, updatedTournament, (err)=>{
    if(err){
        console.log(err);
        res.end(err);
    }
    else{
        //console.log(tournament);
        res.redirect('/tournaments/list');
    }
});
    
}

// Deletes a tournament based on its id.
module.exports.performDelete = (req, res, next) => {
    
    let id = req.params.id;

    TournamentModel.remove({_id: id}, (err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            
            res.redirect('/tournaments/list');
        }
    });
}