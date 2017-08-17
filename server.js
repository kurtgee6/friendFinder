//dependencies

var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();

//server
var PORT = process.env.PORT || 8080;

//parse application
app.use(bodyParser.json());
app.use(express.static('app/public'));
app.use(express.static('app/data'));
app.use(bodyParser.urlencoded({
    extended: false
}));


//gets the API table stored in apiRoutes.js so users can see data
require('./app/routing/apiRoutes.js')(app);

//gets the HTML file stored in htmlRoute.js so users sees display
require('./app/routing/htmlRoutes.js')(app);

//PORT listener
app.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT);
});
