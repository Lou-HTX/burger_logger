var orm = require("../config/orm.js");
var express = require("express");
var app = express();

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function(value, cb) {
        orm.insertOne('burgers', "burger_name", value, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, cb) {
        orm.updateOne('burgers', 'devoured', '1', 'id', condition, function(res) {
            cb(res);
        })
    }
}


// var burger = {
//     all: function(cb) {
//         orm.all("burgers", function(res) {
//             cb(res);
//         });
//     },
//     create: function(cols, vals, cb) {
//         orm.create("burgers", cols, vals, function(res) {
//             cb(res);
//         });
//     },
//     update: function(objColVal, condition, cb) {
//         orm.updateOne("burgers", objColVals, condition, function(res) {
//             cb(res);
//         });
//     }
// };

module.exports = burger;