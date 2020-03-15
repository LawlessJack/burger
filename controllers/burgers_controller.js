var express = require("express");
var bodyParser = require('body-parser');
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

//GET
//selectAll function
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//POST
//insertOne function
router.post("/", function(req, res) {
  console.log(req.body)
  burger.insertOne([
    "burger_name"], [
    req.body.burger_name], function() {
    res.redirect("/");
  });
});

//PUT
//updateOne function
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  //console.log(condition)
 //console.log("condition", condition);
console.log("my log: " + req.body.devoured)
  burger.updateOne(
    {
    devoured: req.body.devoured
    }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;