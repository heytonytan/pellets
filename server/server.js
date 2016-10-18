/* Database */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

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
var server = express();

server.get('/pellets', function (req, res) {
  Pellet.find().then(function(data) {
    res.send(data);
  });
});

server.post('/pellets', function (req, res) {
  console.log(req.body);
  var pelletText = req.body.text; //??
  makePellet(pelletText);
  res.send('new pellet added!');
});

server.listen(3000, function () {
  console.log('Pellets server listening on port 3000!');
});