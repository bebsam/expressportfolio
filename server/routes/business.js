let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
//let Business = require('../models/business');
let passport = require('passport');
let businessController = require('../controllers/business');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Book List page - READ Operation */
router.get('/', requireAuth, businessController.displayBusinessList);

/* GET Route for displaying the Add page - CREATE Operation */
//router.get('/add', businessController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
//router.post('/add', businessController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, businessController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, businessController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, businessController.performDelete);

module.exports = router;