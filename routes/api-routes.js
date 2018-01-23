// ====== API ROUTES ======
/*
    Setups all the Routes to Access Each API
    endpoint.
 */
// Requires
const apiController = require('../controllers/apiContoller.js');

// Exports
 module.exports = (app) => {
    // User Info
    app.get('/api/user_data', apiController.getUser);
    // Drinks
     app.get('/api/drinks', apiController.getAllDrinks);

     app.get('/api/drinks/:id', apiController.getDrink);

     app.post('/api/drinks/', apiController.newDrink);

     app.put('/api/drinks/:id/', apiController.editDrink);

     app.delete('/api/drinks/:id/', apiController.deleteDrink);

     // Comments
     app.get('/api/comments', apiController.getAllComments);

     app.get('/api/comments/:id', apiController.getComment);

     app.post('/api/comments', apiController.newComment);

     app.put('/api/comments/:id', apiController.editComment);

     app.delete('/api/comments/:id', apiController.deleteComment);

  	// Ratings
    app.get('/api/ratings', apiController.getAllRatings);

    api.get('/api/ratings/:id', apiController.getRating);

    api.post('/api/ratings', apiController.newRating);

    api.put('/api/ratings', apiController.editRating);

    api.delete('/api/ratings/:id', apiControler.deleteRating);
    
 };

 
