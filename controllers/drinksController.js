

module.exports = {
    drinks: (req, res) => {
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