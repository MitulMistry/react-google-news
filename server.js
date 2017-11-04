var express = require('express'); //https://github.com/heroku/node-js-getting-started/blob/master/index.js
var cors = require('cors');
var request = require('request');

var newsQuery = require('./lib/newsQuery.js'); //helper functions for generating queries

var app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load(); //use dotenv file for local API key storage
}

app.set('port', (process.env.PORT || 5000)); //gets port from environment or else defaults to 5000

// app.use(cors()); //enable all CORS requests
app.use(express.static(__dirname + '/build')); //read files from the build folder

app.get('/', function(req, res) { //request, response
  res.render('index.html');
});

// API ---
app.get('/api/top', cors(), function(req, res) {
  req.pipe(request(newsQuery.sourceByTop('google-news'))).pipe(res);
});

app.get('/api/arstechnica', cors(), function(req, res) {
  req.pipe(request(newsQuery.sourceByTop('ars-technica'))).pipe(res);
});

app.get('/api/associatedspress', cors(), function(req, res) {
  req.pipe(request(newsQuery.sourceByTop('associated-press'))).pipe(res);
});

app.get('/api/cnn', cors(), function(req, res) {
  req.pipe(request(newsQuery.sourceByTop('cnn'))).pipe(res);
});

app.get('/api/espn', cors(), function(req, res) {
  req.pipe(request(newsQuery.sourceByTop('espn'))).pipe(res);
});

app.get('/api/fortune', cors(), function(req, res) {
  req.pipe(request(newsQuery.sourceByTop('fortune'))).pipe(res);
});

app.get('/api/reuters', cors(), function(req, res) {
  req.pipe(request(newsQuery.sourceByTop('reuters'))).pipe(res);
});

app.get('/api/techcrunch', cors(), function(req, res) {
  req.pipe(request(newsQuery.sourceByTop('techcrunch'))).pipe(res);
});

app.get('/api/wallstreetjournal', cors(), function(req, res) {
  req.pipe(request(newsQuery.sourceByTop('the-wall-street-journal'))).pipe(res);
});

app.get('/api/time', cors(), function(req, res) {
  req.pipe(request(newsQuery.sourceByTop('time'))).pipe(res);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
