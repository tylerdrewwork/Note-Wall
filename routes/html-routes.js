// This file will offer users a set of routes for visiting various HTML pages

// Dependencies
let path = require("path");

// Routes
module.exports = function(app) {

    // base index route
    app.get("/", function(req, res) {
      
        res.render("index");
      });
    };