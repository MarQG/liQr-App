const drinksController = require('../controllers/drinksController.js');
const auth = require('../middleware/auth');

module.exports = (app) => {
    app.get('/drinks', auth.isLoggedIn, drinksController.drinks);
}