const db = require("../models");
const Sequelize = require("sequelize");

// Routes

// GET route to get random notes.  Returns dbNotes, which is an array of 20 random notes pulled from the database. 
module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    // Finding all entries to the tables when used with no options
    db.Note.findAll({
      order: Sequelize.literal('rand()'), limit: 20
    }).then(function(dbNotes) {
      res.json(dbNotes);
    });
  });

  // Returns total number of notes in database
  app.get("/api/notes/count", function(req, res) {
    db.Note.count({
      col: 'id'
    }).then(function(count) {
      res.json(count);
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
  app.post("/api/new", function (req, res) {
    console.log(req.body);

    // Passing in object with text property
    db.Note.create({
      text: req.body.text
    }).then(function(dbNotes) {
      res.json(dbNotes);
    })
  });

  // PUT route // Clueless as to the syntax... and about 6 askBCS chats didn't help either *facepalm*

// app.put("/api/notes/views/:id", function (req, res) {
//   db.Note.update(
//     {id: req.body.id},
//     {views: views +1
//   }).then(function(dbNotes) {
//     res.json(dbNotes);
//   }).catch(function(dbError){
//     console.log("XXX------HIT ERROR IN PUT ROUTE: \n", dbError)
//   })
// });

// The below code is the original attempt... I stuck this all over the place... even once inside the PUT
// Note.increment('views', { by: 1, where: { id: 'note' } });

}





