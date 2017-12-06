var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * from " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table + "(" + cols + ") VALUES (" + vals + ") "; //ERR1
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function() {
  //   var queryString = //;
  //   connection.query(queryString, [whatToSelect, table], function(err, result) {
  //     callback(result);
  //   });
  }
};

module.exports = orm;