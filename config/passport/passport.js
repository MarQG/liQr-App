const bCrypt = require('bcrypt-nodejs');

module.exports = (passport, user) => {
    const User = user;
    const LocalStrategy = require('passport-local').Strategy;

    passport.use('local-register', new LocalStrategy(
        // Define Register Strategy
       {
           usernameField: 'email',
           passwordField: 'password',
           passReqToCallback: true
       },
       // Handle Storing User Details
       (req, email, password, done) => {
            const generateHash = (password) => {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            }

            User.findOne({
                where: {
                    email: email
                }
            }).then( (user) => {
                if(user){
                    return done(null, false, {
                        message: 'That email is already taken.'
                    });
                } else {
                    const userPassword = generateHash(password);
                    const data = {
                        username: req.body.firstname + " " + req.body.lastname,
                        email: email,
                        password: userPassword,
                        first_name: req.body.firstname,
                        last_name: req.body.lastname,
                    };

                    User.create(data).then((newUser, created) => {
                        if(!newUser){
                            return done(null, false);
                        } 
                        if(newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            })
       } 
    ));

    // Define Login Strategy
    passport.use('local-login', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        // Handle Logging User In
        (req, email, password, done) => {
            const User = user;
            const isValidPassword = (userpass, password) => {
                return bCrypt.compareSync(password, userpass);
            }

            User.findOne({
                where: {
                    email: email
                }
            }).then((user) => {
                if(!user){
                    return done(null, false, {
                        message: 'Email does not exist'
                    });
                }

                if(!isValidPassword(user.password, password)){
                    return done(null, false, {
                        message: 'Incorrect Password'
                    });
                }

                const userInfo = user.get();
                return done(null, userInfo);
            });
        }

    ));
    //serialize
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    // deserialize user
    passport.deserializeUser((id, done) => {
        User.findById(id).then((user) => {
            if(user) {
                done(null, user.get({}));
            } else {
                done(user.errors, null);
            }
        });
    });
}