var express = require('express');
var router = express.Router();

let playerController = require('../controllers/player');

//Connect to players model

let Player = require('../models/player');

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

/* GET list of items */
// absence of requireAuth enables people who aren't signed in to access list of players
router.get('/list', playerController.playerList);

// Route for Details
// absence of requireAuth enables people who aren't signed in to access details of players
router.get('/details/:id', playerController.details);

// Routers for edit
router.get('/edit/:id', requireAuth, playerController.displayEditPage);
router.post('/edit/:id', requireAuth, playerController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, playerController.performDelete);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, playerController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, playerController.processAddPage);

module.exports = router;