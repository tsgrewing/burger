var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll(data => {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/cats", (req, res) => {
  burger.insertOne([
    "name", "devoured"
  ], [
    req.body.name, req.body.sleepy
  ], result => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/cats/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  burger.updateOne({
    sleepy: req.body.sleepy
  }, condition, result => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/cats/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  burger.delete(condition, result => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
