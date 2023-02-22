import express from 'express';
import bodyParser from 'body-parser';
import { performCalenderOperation } from './definitions.js';

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.post('/calender-operation', urlencodedParser, function (req, res) {
    let date = performCalenderOperation(req.body)
    res.send(date);
});

// On localhost:3000/welcome
app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

// Change the 404 message modifing the middleware
app.use(function (req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});