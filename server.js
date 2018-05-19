var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var PORT = process.env.PORT || 8080;

var app = express();

// serve static content for the app and set up body-parser
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// set up Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/routes.js");
app.use('/',routes);

// start the server listening
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});