const Fighter = require('../models/fighters');

module.exports = (app) => {

//index
// INDEX
app.get('/', (req, res) => {
  Fighter.find()
    .then(fighters => {
        // console.log(fighters)
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
app.post("/fighters/new", (req, res) => {
  if (req.user) {
      console.log("****TEST1****")
    var fighter = new Fighter(req.body);
    console.log(fighter.name)
    console.log("Tesssssst2")
    fighter.save(function(err, post) {
        res.json({ message: `Fighter ${fighter.name} has been created` })
        console.log("Tesssssst3")


      return res.redirect(`/`);
    });
  } else {
    return res.status(401); // UNAUTHORIZED
  }
});


  // CREATE
  // app.post('/fighters/new', (req, res) => {
  //   // INSTANTIATE INSTANCE OF fighter MODEL
  //   const fighter = new Fighter(req.body);
  //   // SAVE INSTANCE OF fighter MODEL TO DB
  //   fighter.save((err, fighter) => {
  //   console.log(fighter)
  //     // REDIRECT TO THE ROOT
  //     res.json({ message: `Fighter ${fighter.name} has been created` })
  //     // return res.redirect(`/`);
  //   })
  // });

  // UPDATE
  app.put('/fighters/:id', (req, res) => {
    Fighter.findByIdAndUpdate(req.params.id, req.body)
      .then(fighter => {
          // Sending old object in the return Why?
        res.send({fighter})
      })
      .catch(err => {
        console.log(err.message)
      })
  });

  // DELETE
  app.delete('/fighters/:id', function (req, res) {
    console.log("DELETE fighter")
    Fighter.findByIdAndRemove(req.params.id).then((fighter) => {
      res.send("Fighter Deleted");
    }).catch((err) => {
      console.log(err.message);
    })
  })









};
