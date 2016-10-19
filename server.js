/* Database */
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/test');

var Pellet = mongoose.model('Pellet', { 
  text: String,
  position: String
});

var makePellet = function(text) {
  var newPellet = new Pellet({
    text: text,
    position: '' + (Math.random() * -10 + 5) + ' ' + (Math.random() * -10 + 5) + ' -10'
  });
  newPellet.save(function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('pell, pellet!');
    }
  });
};

/* Server */
var express = require('express');
var expressJSON = require('express-json'); 
var bodyParser = require('body-parser');
var cors = require('cors');
var server = express();
server.use(cors());
server.use(expressJSON()); 
server.use(bodyParser()); 

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

server.use(express.static(__dirname + '/build'));

server.get('/', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

server.get('/pellets', function (req, res) {
  Pellet.find().then(function(data) {
    res.set(defaultCorsHeaders);
    res.send(data); // checked, ok
  });
});

server.post('/pellets', function (req, res) {
  var pelletText = req.body.text;
  makePellet(pelletText);
  res.set(defaultCorsHeaders);
  res.send('new pellet added!');
});

server.listen(process.env.PORT || 8080, function () {
  console.log(`Pellets server listening on port ${process.env.PORT || 8080}!`);
});