// set up ========================
var express  = require('express');
var app      = express();                 // create our app w/ express
var mongoose = require('mongoose');           // mongoose for mongodb
var model = require('schema.js') // require file schema.js to define models
var morgan = require('morgan');       // log requests to the console (express4)
var bodyParser = require('body-parser');  // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================

mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu');   // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public'));         // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                     // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));      // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                   // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

  // listen (start app with node server.js) ======================================
app.listen(3000);
console.log("App listening on port 3000");

//application
app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); //load the single view file (angular)
});



// routes ===============================
// api

app.get('/api/todos', function(req, res) {

  //use mongoose to get all todos in the mongo database
  Todo.find(function(err, todos) {

    //if there is an error retrieving, send error.
    if (err)
      res.send(err)

    res.json(todos); //return all todos in JSON format
  });
});