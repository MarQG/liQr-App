
const db = require('../models');

// Requires
// require the models as a db variable
const db = require('../models');


module.exports = {
    drinks: (req, res) => {
        //call db.drinks.findAll() and render the page while passing in the data
        // res.render( args1, args2)

        db.drinks.findAll({}).then((results) => {
            console.log(results[0].drink_name);
            res.render('drinks/index', { drinks: results });
        });
       

    },
    // newDrink
    newDrink: (req, res) => {
    	res.render('drinks/editdrink');
    },
    // updateDrink
    updateDrink: (req, res) => {
    	res.render('drinks/newdrink');
    },
    // showDrinks
    showDrinks: (req, res) => {
    	res.render('drinks/showdrink');
    }
}