var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');
let tournamentController = require('../controllers/tournaments');

/* GET home page. */
router.get('/', controlerIndex.home);



module.exports = router;
