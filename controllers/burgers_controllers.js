var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.redirect("/burgers");
    });

    app.get("/burgers", function(req, res) {
        db.Burger.findAll({}).then(function(allBurgers) {
            var hbsObject = {
                burgers: allBurgers
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    app.post("/burgers/create", function(req, res) {
        db.Burger.create({
            burger_name: req.body.burgerName
        }).then(function() {
            res.redirect("/burgers");
        });
    });

    app.put("/burgers/update/:id", function(req, res) {
        db.Burger.update({
            devoured: req.body.devoured
        }, {
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.redirect("/burgers");
        });
    });

    app.delete("/burgers/delete/:id", function(req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.redirect("/burgers");
        });
    });
}


module.exports = app;

