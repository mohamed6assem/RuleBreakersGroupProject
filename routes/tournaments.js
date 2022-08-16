var express = require('express');
var router = express.Router();

let tournamentController = require('../controllers/tournaments');

//Connect to tournaments model

let Tournament = require('../models/tournaments');

// Helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    
    if(!req.isAuthenticated()){
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');

    }   
    next();     

}
// function checkIfCreator(req, res, next)
// {
//     if(req.session.passport.user.{})
// }

/* GET list of items */
// absence of requireAuth enables people who aren't signed in to access list of tournaments
router.get('/list', tournamentController.tournamentList);

// Route for Details
// absence of requireAuth enables people who aren't signed in to access details of tournaments
router.get('/details/:id', tournamentController.details);

// Routers for edit
router.get('/edit/:id', requireAuth, tournamentController.displayEditPage);
router.post('/edit/:id', requireAuth, tournamentController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, tournamentController.performDelete);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, tournamentController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, tournamentController.processAddPage);

module.exports = router;