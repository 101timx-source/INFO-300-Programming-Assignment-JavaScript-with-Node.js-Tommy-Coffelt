// HelloWorld1.js - a simple API running on Node.js and using Express
var express = require('express');					// use the express module and call it 'express'

var numberToGuess = 0;						// initialize counter

var app = express();								// create a new express() server object called 'app'
app.use(express.urlencoded({extended: false}));     // allows us to parse (i.e., get information from) URLs 
app.use(express.json());

var randomNumber = [];
var numberToGuess = 0;
var numberGuessed = 0;
var outMessage = ""
var randomNumberGenerated =0;
var guessed = false;
// allows us to parse (i.e., get information from) JSON

// app.use() configures the middleware server object. It is called each time a request is sent to the server.
// It contains code for general configuration of the server. 
// In this case we're setting up CORS (cross-origin resource sharing). This just means content on a web page
// can come from a domain other than the domain of that page.
app.use(function(req, res, next) {
    express.urlencoded({extended: false})
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });


app.post('/startgame', function(req,res){
    numberToGuess = Math.floor(Math.random() * 100) + 1;

    randomNumber[req.body.gameId] = numberToGuess;

    console.log('Starting a new game. The number to guess is ' + numberToGuess);

    res.json({ APIMessage: "Game number " + req.body.gameId + " has started. Good luck!" });
});

app.get('/guess', function(req,res){

    let guessed = false;

    numberToGuess = randomNumber[req.query.gameId];
    numberGuessed = parseInt(req.query.userGuess);

    let outMessage = "The guess of " + numberGuessed;

    if (numberGuessed === numberToGuess) {
        guessed = true;
        outMessage += " is correct! Congratulations!";
    } else if (numberGuessed < numberToGuess) {
        outMessage += " is too low!";
    } else {
        outMessage += " is too high!";
    }

    res.json({ APIMessage: outMessage, guessed: guessed });
});
	
console.log("Listening on port 8080");
app.listen(8080);									// And we're listening on port 8080