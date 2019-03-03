const Fighter = require('../models/fighters');
const User = require('../models/user');


module.exports = (app) => {

//index
// INDEX
app.get('/', (req, res) => {
    var currentUser = req.user;

  Fighter.find()//.populate('u_name') dont want to send username with request
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
        var fighter = new Fighter(req.body);
        fighter.u_name = req.user._id;

        fighter
            .save()
            .then(fighter => {
                return User.findById(req.user._id);
            })
            .then(user => {
                console.log(user);
                user.fighters.unshift(fighter._id);
                user.save();
                res.json({ message: `Fighter ${fighter.name} has been created` })
                // REDIRECT TO THE NEW POST
            })
            .catch(err => {
                console.log(err.message);
            });
    } else {
        return res.status(401); // UNAUTHORIZED
    }
});

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
