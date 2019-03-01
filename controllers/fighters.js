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
// GET ONE
app.get("/fighters/:id", function(req, res) {
  // LOOK UP THE POST
  Fighter.findById(req.params.id)
    .then(fighter => {
      res.send({ fighter });
    })
    .catch(err => {
      console.log(err.message);
    });
});

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
