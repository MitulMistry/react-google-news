// Using template for Node app on Heroku:
// https://github.com/heroku/node-js-getting-started/blob/main/index.js

const express = require('express');
const cors = require('cors');
const request = require('request');

// Helper functions for generating API query strings
const newsQuery = require('./lib/newsQuery.js');

const app = express();

// Check for development environment
if (process.env.NODE_ENV !== 'production') {

  // Use dotenv file for local API key storage (.env file)
  require('dotenv').config();

  // Set up Webpack hot reloading for development environment
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.dev.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));
}

// Get port from environment or else default to 5000
app.set('port', (process.env.PORT || 5000));

// Enable all CORS requests
// app.use(cors());

// Read files from this folder
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) { // request, response
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

// This wildcard method (catch-all) handles all other requests - keep on bottom
app.get('*', function (req, res) {
  res.redirect('/');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
