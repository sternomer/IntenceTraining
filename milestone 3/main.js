"use strict";
// exports.__esModule = true;
var express = require("express");
// var config_1 = require("./config");
var app = express();
var POST_PATH = 'api/numbers/prime/validate';
var GET_PATH = 'api/numbers/prime?amount=n';
var env = require("dotenv").config();
var isPrime = require('prime-number');
var port = process.env || 4000;
// app.use(express_1["default"].json);
// app.use(express_1["default"].text);
app.get('/',(req,res) => {
    res.send('hello');
})

app.listen(port, () => {
    console.log(`running on ${port} `);
})
// app.post(POST_PATH, function (req, res) {
//     var bodyNumber = req.body;
//     var bodynumobject = Object.values(bodyNumber);
//     var isTheNumberPrime = [];
//     bodynumobject.forEach(function (value) {
//         isTheNumberPrime.push(isPrime(value));
//     });
//     res.send(isTheNumberPrime);
// });
// app.listen(port, function () { return console.log('the server running'); });
