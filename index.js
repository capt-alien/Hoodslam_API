const express = require('express')
const methodOverride = require('method-override')
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express()
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hoodslamapi');

// END OF AUTH


// require dotenv
require('dotenv').config();


// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); // Add this after you initialize express.
// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))


// Add after body parser initialization!
app.use(expressValidator());



// auth
var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
    req.user = null;
  } else {
    var token = req.cookies.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }

  next();
};
app.use(checkAuth);


// Set db
require('./data/hoodslam-db');
// routes
require('./controllers/fighters.js')(app);
require('./controllers/auth.js')(app);




const port = process.env.PORT || 3000;

// App init
app.listen(port)
