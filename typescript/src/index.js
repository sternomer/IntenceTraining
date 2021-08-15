"use strict";
exports.__esModule = true;
var config_1 = require("./config");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var env = require("dotenv").config();
var isprime = require('isprime');
var path = require('path');
app.use(bodyParser.json());
var port = process.env.SERVER_PORT || config_1["default"].PORT;
// app.set('views',path.join('/home/omer/Desktop/typescript/views'));
app.set('view engine', 'pug');
app.post('/api/numbers/prime/validate', function (req, res) {
    var NumberProperties = req.body;
    var numberValue = Object.values(NumberProperties);
    for (var i = 0; i < numberValue.length; i++) {
        var numberResult = isprime(numberValue[i]);
        if (numberResult === false) {
            res.send(false);
            break;
        }
    }
    res.send(true);
});
app.get('/api/numbers/prime/', function (req, res) {
    var amountValue = (req.query.amount);
    var allPrimeNumbers = [];
    if (amountValue <= 32) {
        for (var i = 1; allPrimeNumbers.length < amountValue; i++) {
            var myNewprimeNumber = i;
            var isTheNumberPrime = isprime(i);
            if (isTheNumberPrime === true) {
                allPrimeNumbers.push(myNewprimeNumber);
            }
        }
    }
    res.send(allPrimeNumbers);
});
app.get('/api/numbers/prime/display', function (req, res) {
    var allPrimeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    var number1 = allPrimeNumbers[0];
    var number2 = allPrimeNumbers[1];
    var number3 = allPrimeNumbers[2];
    var number4 = allPrimeNumbers[3];
    var number5 = allPrimeNumbers[4];
    var number6 = allPrimeNumbers[5];
    var number7 = allPrimeNumbers[6];
    var number8 = allPrimeNumbers[7];
    var number9 = allPrimeNumbers[8];
    var number10 = allPrimeNumbers[9];
    res.render('index', { number1: number1, number2: number2, number3: number3, number4: number4, number5: number5, number6: number6, number7: number7, number8: number8, number9: number9, number10: number10 });
});
app.listen(port, function () {
    console.log("listening at http://localhost:" + port);
});
