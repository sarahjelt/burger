var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var port = 3000;

var app = express();

app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port, () => console.log(`listening on port ${port}`));

// lets users input names of burgers they'd like to eat
//submit burger name, displays burger on left side of page -- WAITING TO BE DEVOURED
//each burger in waiting area has DEVOUR IT! button; when clicked, burger will move to right side of page
//app stores every burger in DB, devoured or no

