const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');



// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Add after body parser initialization!
app.use(expressValidator());


// routes
require('./controllers/fighters.js')(app);

// Set db
require('./data/hoodslam-db');

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// App init
app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
