# React Google News
A simple [React](https://reactjs.org/) front end using the [Google News API](https://newsapi.org/).

Sample application deployed on Heroku: https://react-google-news.herokuapp.com

Implements Bootstrap via [Reactstrap](https://reactstrap.github.io/).
Makes API calls with [fetch](https://github.com/github/fetch).

Configured with [Node Package Manager](https://www.npmjs.com/), [Webpack](https://webpack.js.org/), and [Babel](https://babeljs.io/).

Express back end to make API requests and protect API key. Configure API key locally with dotenv. For production, set environment variable manually (through command line: NODE_ENV=production, API_KEY=...).

Webpack - configured with webpack-merge to separate development and production builds, but keep common configuration. Also configured for hot reloads in the Express server, so Webpack will rebuild when changes are made.

Commands:
`npm run webpack-build` - Use Webpack to build for production.
`npm run webpack-start` - Run Webpack dev server.
`npm run start` - Run the Express server via Node.
`npm run dev` - Build for development and run Express server.

Use `npm run start` to build automatically and run.
