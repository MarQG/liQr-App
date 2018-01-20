// Requires
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const localStorage = require('passport-local');
const app = express();
const db = require('./models');
const env = require('dotenv');

// Config Variables
const publicPath = path.join(__dirname, '/public');
const port = process.env.PORT || 3000;

// Express Configuration
app.use(express.static(publicPath));
// Body Parser Configuration
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// EJS Config
app.set("view engine", "ejs");

// ===== Passport ======

app.use(session({
    secret: "yolo swag",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// ===== TEST ROUTES ======
app.get("/",(req, res)=>{
    let testText = [
        {
            name: 'Ferenc'
        },
        {
            name: "Collin"
        },
        {
            name: "Mel"
        }
    ]
    res.render('landing', { text: testText });
});

// ===== ROUTES ======

// ===== Auth ======
require('./routes/auth-routes.js')(app, passport);
// Load Passport Strategies
require('./config/passport/passport.js')(passport, db.users);

// ===== Drinks ======
require('./routes/drinks-routes.js')(app);

// ===== APIs ======
require('./routes/api-routes.js')(app);

// Server Listen Setup
db.sequelize.sync({ force: true }).then(() => {
    app.listen(port, () =>{
        console.log("Server listening on port: " + port);
    });
})
