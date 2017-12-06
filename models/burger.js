var orm = require("../config/orm.js");

//call ORM functions using burger-specific input for the ORM
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(results) {
      cb(results);
    })
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(results) { //ERR2
      cb(results);
    })
  },
  updateOne: function() {

  }
};


// orm.insertOne() {
//   console.log(data);

// }

// orm.updateOne() {
//   console.log(data);
// }

module.exports = burger;