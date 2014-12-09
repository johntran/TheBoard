var http = require('http');
var express = require('express');
var app = express();

// Setup the View Engine
//app.set("view engine", "jade");
//app.engine("ejs", ejsEngine); // support master pages
app.set("view engine", "ejs"); // ejs view engine

app.get("/", function (req, res) { 
    //res.send("beep");
    res.render("ejs/index", { title: "Express + Jade" });

});

app.get("/api/users", function (req, res) { 
    res.set("Content-Type", "application/json");
    res.send({ name: "John", isValid: true, group: "Admin" });
});

var server = http.createServer(app);

server.listen(3000);

//var port = process.env.port || 1337;
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);