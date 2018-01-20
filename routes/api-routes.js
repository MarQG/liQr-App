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

     app.post('/api/drinks', apiController.apiDrinks);

     app.put('/api/drinks', apiController.apiDrinks);

     app.get('/api/drinks', apiController.apiDrinks);

     app.delete('/api/comments', apiController.apiDrinks);

     app.post('/api/comments', apiController.apiDrinks);

     app.put('/api/comments', apiController.apiDrinks);

     app.delete('/api/comments', apiController.apiDrinks);

  	
 };

 
