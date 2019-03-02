const express = require('express')
const methodOverride = require('method-override')
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express()
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

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

// Set db
require('./data/hoodslam-db');
// routes
require('./controllers/fighters.js')(app);
require('./controllers/auth.js')(app);




// app.get('/', (req, res) => {
//     // Need to figure out the reroute thing
//   res.send('Succsss!')
// })


// App init
app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
