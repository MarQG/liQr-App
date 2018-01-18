// Requires
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./models');

// Config Variables
const publicPath = path.join(__dirname, '/public');
const port = process.env.PORT || 3000;

// Express Configuration
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true}));
app.set("view engine", "ejs");

app.get("/",(req, res)=>{
    let testText = [
        '1',
        '2',
        '3'
    ]
    res.render('landing', { text: testText });
});

// Server Listen Setup
db.sequelize.sync({ force: true }).then(() => {
    app.listen(port, () =>{
        console.log("Server listening on port: " + port);
    });
})
