// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// The variables cols and vals are arrays.
var burger = {
//select All function
  selectAll: function(cols, vals, cb) {
    orm.selectAll("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

//insert One function
  insertOne: function(objColVals, condition, cb) {
    orm.insertOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

//update One function
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};


// Export the database functions for the controller (catsController.js).
module.exports = burger;