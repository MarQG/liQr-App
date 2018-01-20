// ===== API CONTROLLER ======
/* 
    This controllers and manages all API
    calls to the server. Each section will
    serve up the relevant data from the database
    as JSON.
 */
// Requires
const db = require('../models');

// Exports
module.exports = {
    // Drinks API
    getAllDrinks: (req, res) => {
        db.drinks.findAll({}).then((drinks) => {
            if(!drinks){
                res.status(404).end();
            }
            console.log(drinks);
            res.json(drinks);
        });
    },

    // Comments API
    getAllComments: (req, res) => {
        db.comments.findAll({}).then((comments) =>{
            if(!comments){
                res.status(404).end();
            }
            console.log(comments);
            res.json(comments);
        });
    },
};