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
    // User
    getUser: (req, res) => {

        if (req.user === undefined) {
            // The user is not logged in
            res.json({});
        } else {
            res.json({
                userId: req.user.id,
                username: req.user.username
            });
        }
    },

    // Drinks API
    getAllDrinks: (req, res) => {
        db.drinks.findAll({}).then((drinks) => {
            if(!drinks.length === 0){
                res.status(404).end();
            }
            console.log(drinks);
            res.json(drinks);
        });
    },
    getDrink: (req, res) => {
        db.drinks.findOne({
            where: {
                id: req.params.id
            }
        }).then((drink) => {
            if(!drink === 0){
                res.status(404).end();
            }
            console.log(drink);
            res.json(drink);
        });
    },
    newDrink: (req, res) => {
        db.drinks.create({
            drink_name: req.body.name,
            description: req.body.description,
            image_link: req.body.imageLink
        }).then((results) => {
            res.json(results);
        });
    },
    editDrink: (req, res) => {
        db.drinks.update({
            drink_name: req.body.name,
            description: req.body.description,
            image_link: req.body.imageLink
        },{
            where:{
                id: req.params.id
            }
        }).then((results) => {
            res.json(results);
        });
    },
    deleteDrink: (req, res) => {
        db.drinks.destroy({
            where: {
                id: req.params.id
            }
        }).then((results)=> {
            res.json(results);
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

    getComment: (req, res) => {
        db.comments.findOne({
            where: {
                id: req.params.id
            }
        }).then((comment) => {
            if(!comment === 0) {
                res.status(404).end();
            }
            console.log(comment);
            res.json(comment);
        });
    },

    newComment: (req, res) => {
        db.comments.create({
            comment: req.body.comment,
            drinkId: req.body.drinkId,
            userId: req.body.userId
        }).then((results) => {
            res.json(results);
        });
    },

    editComment: (req, res) => {
        db.comments.update({
            comment: req.body.comment,
            drinkId: req.body.drinkId,
            userId: req.body.userId
        }, {
            where:{
                id: req.params.id
            }
        }).then((results) => {
            res.json(results);
        });
    },

    deleteComment: (req, res) => {
        db.comments.destroy({
            where: {
                id: req.params.id
            }
        }).then((results) => {
            res.json(results);
        });
    },
};

getAllRatings: (req, res) => {
    db.ratings.findAll({}).then((ratings) =>{
        if(!ratings){
            res.status(404).end();
        }
        console.log(ratings);
        res.json(ratings);
    });
},

getRating: (req, res) => {
    db.ratings.findOne({
        where: {
            id: req.params.id
        }
    }).then((ratings) => {
        if(!ratings === 0) {
            res.status(404).end();
        }
        console.log(ratings);
        res.json(ratings);
    });
},

newRating: (req, res) => {
    db.ratings.create({
        drink_name: req.body.name,
        description: req.body.description,
        image_link: req.body.imageLink
    }).then((results) => {
        res.json(results);
    });
},
editRating: (req, res) => {
    db.ratings.update({
        drink_name: req.body.name,
        description: req.body.description,
        image_link: req.body.imageLink
    },{
        where:{
            id: req.params.id
        }
    }).then((results) => {
        res.json(results);
    });
},
deleteRating: (req, res) => {
    db.ratings.destroy({
        where: {
            id: req.params.id
        }
    }).then((results)=> {
        res.json(results);
    });
},
