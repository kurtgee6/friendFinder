//dependencies

var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();

//server

var PORT = 8080;

var users = [];

var firstUser = {
    userName: "asdf",
    userImage: "asdf",
    userQuestions: ["5", "3", "1", "2", "3", "2", "3", "1", "4", "5"]
}

//parse application
app.use(bodyParser.json());

//gets the HTML file stored in htmlRoute.js so users sees display
require('./routing/htmlRoutes.js')(app);


//PORT listener
app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
});
