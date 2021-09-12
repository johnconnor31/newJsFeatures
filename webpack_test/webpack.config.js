const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports={
    mode: 'production',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: { 
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { 
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.?css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            template: path.join(__dirname, 'src', './static/index.html')
        }),
        new webpack.ProgressPlugin()
    ],
    devServer: {
        static: './dist'
    }
}