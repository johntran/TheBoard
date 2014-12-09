var http = require('http');
var express = require('express');
var app = express();
var controllers = require("./controllers");

// Setup the View Engine
//app.set("view engine", "jade");
//app.engine("ejs", ejsEngine); // support master pages
app.set("view engine", "jade"); // jade view engine


//Map the routes
controllers.init(app);

app.get("/api/users", function (req, res) { 
    res.set("Content-Type", "application/json");
    res.send({ name: "John", isValid: true, group: "Admin" });
});

var server = http.createServer(app);

server.listen(3000);