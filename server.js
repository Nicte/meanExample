var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var logger = require('morgan');

// config files
var db = require('./config/db');

// set port to use
var port = process.env.PORT || 3000;

// connect to MongoDB
mongoose.connect(db.url, function(err) {
    if(err) {
        console.log('connection to mongo error', err);
    } else {
        console.log('connection to mongo successful');
    }
});

// Set up logger
app.use(logger('dev'));

// parse application/json 
app.use(bodyParser.json()); 
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:3000
app.listen(port, function() {
  console.log('Magic happens on port ' + port);
});

// expose app           
exports = module.exports = app;