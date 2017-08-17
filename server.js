//dependencies

var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();

//server
var PORT = 8080;

//parse application
app.use(bodyParser.json());
app.use(express.static('app/public'));
app.use(express.static('app/data'));


//gets the API table stored in apiRoutes.js so users can see data
require('./app/routing/apiRoutes.js')(app);

//gets the HTML file stored in htmlRoute.js so users sees display
require('./app/routing/htmlRoutes.js')(app);


/////////////////////////////////////////////////////////////////////////
////////////////////////////GO BACK TO IT SIR////////////////////////////
/////////////////////////////////////////////////////////////////////////

// Create new Characters - takes in JSON input
app.post("/api/friends", function (req, res) {
    var newcharacter = req.body;

    newcharacter.name = newcharacter.name

    console.log(newcharacter);

    friends.push(newcharacter);

    res.json(newcharacter);
});


/////////////////////////////////////////////////////////////////////////
////////////////////////////GO BACK TO IT SIR////////////////////////////
/////////////////////////////////////////////////////////////////////////


//PORT listener
app.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT);
});
