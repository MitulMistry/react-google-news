var express = require('express'); //https://github.com/heroku/node-js-getting-started/blob/master/index.js
var cors = require('cors');
var request = require('request');

var newsQuery = require('./lib/newsQuery.js'); //helper functions for generating API query strings

var app = express();

if (process.env.NODE_ENV !== 'production') { //check for development environment
  require('dotenv').load(); //use dotenv file for local API key storage

  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var config = require('./webpack.dev.js');
  var compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.set('port', (process.env.PORT || 5000)); //gets port from environment or else defaults to 5000

// app.use(cors()); //enable all CORS requests
app.use(express.static(__dirname + '/dist')); //read files from this folder

app.get('/', function(req, res) { //request, response
  res.render('index.html');
});

// API ---
function pipeSourceByTop(req, res, source) {
  req.pipe(request(newsQuery.sourceByTop(source))).pipe(res);
}

app.get('/api/top', cors(), function(req, res) {
  pipeSourceByTop(req, res, 'google-news');
});

app.get('/api/arstechnica', cors(), function(req, res) {
  pipeSourceByTop(req, res, 'ars-technica');
});

app.get('/api/associatedpress', cors(), function(req, res) {
  pipeSourceByTop(req, res, 'associated-press');
});

app.get('/api/cnn', cors(), function(req, res) {
  pipeSourceByTop(req, res, 'cnn');
});

app.get('/api/espn', cors(), function(req, res) {
  pipeSourceByTop(req, res, 'espn');
});

app.get('/api/fortune', cors(), function(req, res) {
  pipeSourceByTop(req, res, 'fortune');
});

app.get('/api/reuters', cors(), function(req, res) {
  pipeSourceByTop(req, res, 'reuters');
});

app.get('/api/techcrunch', cors(), function(req, res) {
  pipeSourceByTop(req, res, 'techcrunch');
});

app.get('/api/wallstreetjournal', cors(), function(req, res) {
  pipeSourceByTop(req, res, 'the-wall-street-journal');
});

app.get('/api/time', cors(), function(req, res) {
  pipeSourceByTop(req, res, 'time');
});

app.get('/api/usatoday', cors(), function(req, res) {
  pipeSourceByTop(req, res, 'usa-today');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
