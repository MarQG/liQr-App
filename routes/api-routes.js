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

     app.post('/api/drinks', apiController.newDrink);

     app.put('/api/drinks/:id', apiController.editDrink);

     app.delete('/api/drinks/:id', apiController.deleteDrink);

    //  app.get('/api/comments', apiController.apiDrinks);

    //  app.post('/api/comments', apiController.apiDrinks);

    //  app.put('/api/comments', apiController.apiDrinks);

    //  app.delete('/api/comments', apiController.apiDrinks);

  	
 }

 
