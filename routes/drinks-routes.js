const drinksController = require('../controllers/drinksController.js');
const auth = require('../middleware/auth');

// TODO add the three routes and have them render the related drink views
// each app.get needs to have three parameters passed to them
// the route as called in the browser the middelware isLoggedIn and the related Controller
// newDrink should load drinks/editdrink
// updateDrink should do the drinks/newdrink
// showDrinks should show the drinks/showdrink
module.exports = (app) => {
    app.get('/drinks', auth.isLoggedIn, drinksController.drinks);
      
    // drinks/new
    app.get('/drinks/newdrink', auth.isLoggedIn, drinksController.updateDrink);

    // drinks/edit
    app.get('drinks/editdrink', auth.isLoggedIn, drinksController.newDrink);

    // drinks/show
    app.get('/drinks/showdrink', auth.isLoggedIn, drinksController.showDrinks);

};