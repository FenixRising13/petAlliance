var orm = require("../config/orm.js");

var dog = {
  all: function(cb) {
    orm.all("dogs", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("dogs", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("dogs", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("dogs", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (dogsController.js).
module.exports = dog;
