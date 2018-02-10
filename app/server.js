var express = require("express");
var bodyParcer = require("body-parcer");
var path = require("path");
var app = express();
var port = process.env.PORT || 3000;

app.use (bodyParcer.urlencode({
    extended: false
}));

app.use(bodyParcer.text());

app.use(bodyParcer.json());

require("./app/routing/htmlRouts.js")(app);
require("./app/routing/api.js")(app);

app.listen(port,function(){
    console.log("Good to go on PORT " + port);
});