const db = require("../models");


// Routes

// GET route to get all notes
module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    // Finding all entries to the tables when used with no options
    db.Note.findAll({}).then(function(dbNotes) {
      res.json(dbNotes);
    });

  });

   // Get route for retrieving a single note
   app.get("/api/notes/:id", function(req, res) {
    db.Note.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbNotes) {
        res.json(dbNotes);
      });
  });

// POST route to create a new note
  app.post("/api/notes", function (req, res) {
    console.log(req.body);

    // Passing in object with text property
    db.Note.create({
      text: req.body.text
    }).then(function(dbNotes) {
      res.json(dbNotes);
    })
  });

}