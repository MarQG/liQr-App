// ==== Auth.js =====
/*
    Contains all the middleware auth code to prevent
    non-users from editing the site inappropriately
    or limiting users to only their code
 */

 // Require models
 const db = require('../models');

module.exports = {
    isLoggedIn: (req, res, next) => {
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/login');
    },
    checkCommentOwnership: (req, res, next) => {
        if(req.isAuthenticated()){
            //does user own the comment?
            db.comments.findOne({
                where:{
                    id: req.params.comment_id
                }
            }).then(function(comment){
                if(comment === 0){
                    res.redirect('back');
                } else {
                    if(comment.userId === req.user._id){
                        next();
                    } else {
                        req.redirect('back');
                    }
                }
            });
        } else {
            req.flash("error", "You need to be logged in to do that");
            res.redirect("back");
        }
    }
}

