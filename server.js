

var express = require('express');
var app = express();
var http = require('http');
//var  httpServer = http.Server(app);

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/search-fruit.html');
    console.log(new Date()+":"+"New request");
});
app.listen(8080);