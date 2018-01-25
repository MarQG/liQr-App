const authControllers = require('../controllers/authController');

module.exports = (app, passport) => {
    app.get('/register', authControllers.register);

    app.post('/register', passport.authenticate('local-register', {
        successRedirect: '/drinks/',
        failureRedirect: '/register'
    }));

    app.get('/login', authControllers.login);

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/drinks/',
        failureRedirect: '/login'
    }));

    app.get('/logout', authControllers.logout);

};