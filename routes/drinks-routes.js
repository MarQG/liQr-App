const drinksController = require('../controllers/drinksController.js');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

// TODO add the three routes and have them render the related drink views
// each app.get needs to have three parameters passed to them
// the route as called in the browser the middelware isLoggedIn and the related Controller
// newDrink should load drinks/editdrink
// updateDrink should do the drinks/newdrink
// showDrinks should show the drinks/showdrink

router.get('/', drinksController.drinks);
    
// drinks/new
router.get('/new', drinksController.newDrink);

// drinks/edit
router.get('/:id/edit', drinksController.updateDrink);

// drinks/show
router.get('/:id', drinksController.showDrink);

module.exports = router;


<<<<<<< HEAD
};
=======


>>>>>>> a6d6b466697bc8c856317ed583474c061dfb50d1
