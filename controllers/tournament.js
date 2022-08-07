// create a reference to the model
let TournamentModel = require('../models/tournament');

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
            res.render('/', {
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
        //_id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        match1: {
            player1: req.body.match1.player1,
            player2: req.body.match1.player2,
            winner: req.body.match1.winner,
        },
        match2: {
            player3: req.body.match2.player3,
            player4: req.body.match2.player4,
            winner: req.body.match2.winner,
        },
        match3: {
            player5: req.body.match3.player5,
            player6: req.body.match3.player6,
            winner: req.body.match3.winner,
        },
        match4: {
            player7: req.body.match4.player7,
            player8: req.body.match4.player8,
            winner: req.body.match4.winner,
        },
        
        semifinal1: {
            semiplayer1: req.body.semifinal1.semiplayer1,
            semiplayer2: req.body.semifinal1.semiplayer2,
            winner: req.body.semifinal1.winner,
        },
        semifinal2: {
            semiplayer3: req.body.semifinal3.semiplayer3,
            semiplayer4: req.body.semifinal4.semiplayer4,
            winner: req.body.semifinal2.winner,
        },

        final: {
            finalplayer1: req.body.final.finalplayer1,
            finalplayer2: req.body.final.finalplayer2,
            winner: req.body.final.winner,
        },
        owner: (req.body.owner == null || req.body.owner == "")? req.payload.id : req.body.owner
    });
//shows error and redirects user to tournament list if there is no error
    TournamentModel.create(newTournament, (err, tournament)=>{
    if(err){
        console.log(err);
        res.end(err);
    }
    else{
        console.log(tournament);
        res.redirect('/');
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
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        match1: {
            player1: req.body.match1.player1,
            player2: req.body.match1.player2,
            winner: req.body.match1.winner,
        },
        match2: {
            player3: req.body.match2.player3,
            player4: req.body.match2.player4,
            winner: req.body.match2.winner,
        },
        match3: {
            player5: req.body.match3.player5,
            player6: req.body.match3.player6,
            winner: req.body.match3.winner,
        },
        match4: {
            player7: req.body.match4.player7,
            player8: req.body.match4.player8,
            winner: req.body.match4.winner,
        },
        
        semifinal1: {
            semiplayer1: req.body.semifinal1.semiplayer1,
            semiplayer2: req.body.semifinal1.semiplayer2,
            winner: req.body.semifinal1.winner,
        },
        semifinal2: {
            semiplayer3: req.body.semifinal3.semiplayer3,
            semiplayer4: req.body.semifinal4.semiplayer4,
            winner: req.body.semifinal2.winner,
        },

        final: {
            finalplayer1: req.body.final.finalplayer1,
            finalplayer2: req.body.final.finalplayer2,
            winner: req.body.final.winner,
        },
        owner: (req.body.owner == null || req.body.owner == "")? req.payload.id : req.body.owner
    });

    TournamentModel.updateOne({_id: id}, updatedTournament, (err)=>{
    if(err){
        console.log(err);
        res.end(err);
    }
    else{
        //console.log(tournament);
        res.redirect('/');
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
            
            res.redirect('/');
        }
    });
}