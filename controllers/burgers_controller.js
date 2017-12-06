var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  })
});

router.post("/api/burgers", function(req, res) {
  var nooBurger = req.body;
  burger.insertOne(nooBurger, function(res) { //ERR
    res.json({id: res.insertId})
  })
});

module.exports = router;