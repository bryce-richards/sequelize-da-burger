var express = require("express");

var router = express.Router();

var db = require("../models/");

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    db.Burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function(req, res) {
    db.Burger.insertOne(req.body.burgerName, function() {
        res.redirect("/burgers");
    });
});

router.put("/burgers/update/:id", function(req, res) {

    db.Burger.updateOne(req.body.devoured, req.params.id, function() {
        res.redirect("/burgers");
    });
});

router.delete("/burgers/delete/:id", function(req, res) {

    db.Burger.deleteOne(req.params.id, function() {
        res.redirect("/burgers");
    });
});

module.exports = router;

