// Requires
// require the models as a db variable

module.exports = {
    drinks: (req, res) => {
        //call db.drinks.findAll() and render the page while passing in the data
        // res.render( args1, args2)
        res.render('drinks/index');
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