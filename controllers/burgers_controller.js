var express = require("express");

var router = express.Router();

var hamburger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  hamburger.selectAll(function(data) {
    var hbsObject = {
      burger_name: data
    };

    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  hamburger.insertOne([
    "burger_name"
  ], [
    req.body.name
  ], function(result) {

    res.json({ id: result.id });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  hamburger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;