# React Google News
A simple [React](https://reactjs.org/) front end application using the [Google News API](https://newsapi.org/).

![screenshot](readme_react_google_news.jpg)

## Demo App
Sample application deployed on Heroku: https://react-google-news.herokuapp.com

## Application Info
Configured with [Node Package Manager](https://www.npmjs.com/), [Webpack](https://webpack.js.org/), and [Babel](https://babeljs.io/).

Uses webpack-merge to separate development and production builds, but keep common configuration. Also configured for hot reloads in the Express server, so Webpack will rebuild when changes are made.

An Express back end is used to make API requests and protect the API key. Configure API key locally with [dotenv](https://www.npmjs.com/package/dotenv). For production, set an environment variable manually (through command line: NODE_ENV=production, API_KEY=...).

Implements Bootstrap via [Reactstrap](https://reactstrap.github.io/).
Makes front end API calls with [fetch](https://github.com/github/fetch).

## Commands

`npm run build` - Use Webpack to build for production.

`npm run start` - Run the Express server via Node.

`npm run dev` - Build for development and run Express server.

## Install Instructions
Node Package Manager (NPM) is used for dependencies. To install the application locally, follow these instructions:

1. Install [Node.js](https://nodejs.org/). NPM comes packaged with it.
2. Run `npm install` in the command line while in the project directory. It will install dependencies from the [package.json file](../master/package.json).
3. To build for development and run the local dev server at http://localhost:5000, run `npm run dev`. It will run the Node/Express application in the [server.js file](../master/server.js).

## License
This project is open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
