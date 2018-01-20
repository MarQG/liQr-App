const db = require('../models');

module.exports = {
    drinks: (req, res) => {
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