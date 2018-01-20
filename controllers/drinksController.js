
const db = require('../models');

// Requires
// require the models as a db variable


module.exports = {
    drinks: (req, res) => {
        //call db.drinks.findAll() and render the page while passing in the data
        // res.render( args1, args2)
        res.render('drinks/index');
         db.drinks.findAll({}).then((drinks) => {
            if(!drinks){
                res.status(404).end();
            }
            console.log(drinks);
            //res.render('drinks/index', { drinks: [ { drink_name: 'Yolo'}] });


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