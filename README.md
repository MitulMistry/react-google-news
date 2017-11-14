# React Google News
A simple [React](https://reactjs.org/) front end using the [Google News API](https://newsapi.org/).

Implements Bootstrap via [Reactstrap](https://reactstrap.github.io/).
Makes API calls with [fetch](https://github.com/github/fetch).

Configured with [Node Package Manager](https://www.npmjs.com/), [Webpack](https://webpack.js.org/), and [Babel](https://babeljs.io/).

Express back end to make API requests and protect API key. Configure API key locally with dotenv. For production, set environment variable manually (through command line).

Webpack - configured with webpack-merge to separate development and production builds, but keep common configuration.

Commands:
`npm run webpack-build` - Use Webpack to build for production.
`npm run webpack-start` - Run Webpack dev server.
`npm run start` - Run the Express server via Node.
`npm run dev` - Build for development and run Express server.

Use `npm run dev` to build and run.
