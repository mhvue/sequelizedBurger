var express = require("express");
var router = express.Router();
var db = require("../models")
// console.log(db);


// // get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  db.Burger.findAll({}).then(function(dbburger) {
    // console.log(dbburger);
    var hbsObj= {
      burger_data: dbburger
    };
    res.render("index", hbsObj);
  });
});

// // post route -> back to index
router.post("/burgers/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
   }).then(function(dbburger) {
    console.log(dbburger);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/:id", function(req, res) {
  db.Burger.update(
    {
    devoured: req.body.devoured
  },{
    where: {
      id: req.params.id
    }
  }).then(function(dbburger) {

    console.log(req.params.id)
    console.log("yummmm" + dbburger);
    res.sendStatus(200);
  });
});

module.exports = router;

