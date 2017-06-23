var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();
var bodyParser = require('body-parser');
var connection = require('../config/connection.js');


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burgers: data });
    });
});

router.post("/", function(req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect("/");
    });
});


// router.get("/", function(req, res) {
//     burger.all(function(data) {
//         var hbsObject = {
//             burger: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

// router.post("/", function(req, res) {
//     burger.create([
//         "burger_name", "devoured"
//     ], [
//         req.body.burger_name, req.body.devoured
//     ], function() {
//         res.redirect("/");
//     });
// });

// router.put("/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
//     console.log("condition", condition);
//     burger.update({
//         devoured: req.body.devoured
//     }, condition, function() {
//         res.redirect("/");
//     });
// });

module.exports = router;