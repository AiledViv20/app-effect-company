var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use(express.static('public'))

server.listen(8080, function() {
    console.log('Servidor corriendo en http://localhost:8080');
})