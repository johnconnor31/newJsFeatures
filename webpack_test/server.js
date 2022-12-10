const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config');
const compiler = Webpack(config);

const devOptions = { ...config.devServer, open: true };

const devServer = new WebpackDevServer(devOptions, compiler);

const runServer = async () => {
    console.log('starting dev server');
    await devServer.start();
}

runServer();
