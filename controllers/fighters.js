const Fighter = require('../models/fighters');

module.exports = (app) => {

  // CREATE
  app.post('/fighters/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    console.log("test1************");
    const fighter = new Fighter(req.body);
        console.log("test2************");

    // SAVE INSTANCE OF POST MODEL TO DB
    fighter.save((err, fighter) => {
    console.log(fighter)
      // REDIRECT TO THE ROOT
      return res.redirect(`/`);
    })
  });

};
