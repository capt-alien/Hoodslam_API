const Fighter = require('../models/fighters');

module.exports = (app) => {

//index
// INDEX
app.get('/', (req, res) => {
  Fighter.find()
    .then(fighters => {
        console.log(fighters)
        // {fighters: fighters}
      res.send( {fighters: fighters});
    })
    .catch(err => {
      console.log(err);
    })
})


  // CREATE
  app.post('/fighters/new', (req, res) => {
    // INSTANTIATE INSTANCE OF fighter MODEL
    const fighter = new Fighter(req.body);
    // SAVE INSTANCE OF fighter MODEL TO DB
    fighter.save((err, fighter) => {
    console.log(fighter)
      // REDIRECT TO THE ROOT
      return res.redirect(`/`);
    })
  });

};
