/* Database */
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
// mongoose.connect('mongodb://heroku_hktz3v8j:1nd1hk0940mnn5cgij44v3crja@ds061676.mlab.com:61676/heroku_hktz3v8j');
mongoose.connect(process.env.MONGODB_URI);

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
var server = express();
server.use(express.static(__dirname + "/build"));
server.use(expressJSON()); 
server.use(bodyParser()); 

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

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