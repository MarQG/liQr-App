// ==== Auth.js =====
/*
    Contains all the middleware auth code to prevent
    non-users from editing the site inappropriately
    or limiting users to only their code
 */

module.exports = {
    isLoggedIn: (req, res, next) => {
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/login');
    }
}