// ====== API ROUTES ======
/*
    Setups all the Routes to Access Each API
    endpoint.
 */
// Requires
const apiController = require('../controllers/apiContoller.js');

// Exports
 module.exports = (app) => {
     app.get('/api/drinks', apiController.apiDrinks);
     app.get('/api/drinks/:id', apiController.getDrink);
 }