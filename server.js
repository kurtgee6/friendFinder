//dependencies

var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();

//server
var PORT = 8080;

//parse application
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('data/friend.js'));

//gets the API table stored in apiRoutes.js so users can see data
require('./routing/apiRoutes.js')(app);

//gets the HTML file stored in htmlRoute.js so users sees display
require('./routing/htmlRoutes.js')(app);

//PORT listener
app.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT);
});
