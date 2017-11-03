var express = require('express'); //https://github.com/heroku/node-js-getting-started/blob/master/index.js
var cors = require('cors');
var request = require('request');
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
const API_KEY = process.env.API_KEY; //load API key from environment
const API_URL = 'https://newsapi.org/v1/';

app.get('/api/top', cors(), function(req, res) {
  req.pipe(request(API_URL + 'articles?source=google-news&sortBy=top&apiKey=' + API_KEY)).pipe(res);
});

app.get('/api/arstechnica', cors(), function(req, res) {
  req.pipe(request(API_URL + 'articles?source=ars-technica&sortBy=top&apiKey=' + API_KEY)).pipe(res);
});

app.get('/api/associatedspress', cors(), function(req, res) {
  req.pipe(request(API_URL + 'articles?source=associated-press&sortBy=top&apiKey=' + API_KEY)).pipe(res);
});

app.get('/api/cnn', cors(), function(req, res) {
  req.pipe(request(API_URL + 'articles?source=cnn&sortBy=top&apiKey=' + API_KEY)).pipe(res);
});

app.get('/api/espn', cors(), function(req, res) {
  req.pipe(request(API_URL + 'articles?source=google-news&sortBy=top&apiKey=' + API_KEY)).pipe(res);
});

app.get('/api/fortune', cors(), function(req, res) {
  req.pipe(request(API_URL + 'articles?source=fortune&sortBy=top&apiKey=' + API_KEY)).pipe(res);
});

app.get('/api/reuters', cors(), function(req, res) {
  req.pipe(request(API_URL + 'articles?source=reuters&sortBy=top&apiKey=' + API_KEY)).pipe(res);
});

app.get('/api/techcrunch', cors(), function(req, res) {
  req.pipe(request(API_URL + 'articles?source=techcrunch&sortBy=top&apiKey=' + API_KEY)).pipe(res);
});

app.get('/api/wallstreetjournal', cors(), function(req, res) {
  req.pipe(request(API_URL + 'articles?source=the-wall-street-journal&sortBy=top&apiKey=' + API_KEY)).pipe(res);
});

app.get('/api/time', cors(), function(req, res) {
  req.pipe(request(API_URL + 'articles?source=time&sortBy=top&apiKey=' + API_KEY)).pipe(res);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
