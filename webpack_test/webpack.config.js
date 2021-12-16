const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const workboxWebpackPlugin = require('workbox-webpack-plugin');
const webpack = require('webpack');
module.exports={
    mode: 'production',
    entry: { 
        myApp: './src/index.js'
    },
    resolve: {
        fallback: { 
            react: path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom')
        }
    },
    resolveLoader: {
        fallback: { 
        react: path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom')
        }
    },
    output: { 
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
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
        new webpack.ProgressPlugin(),
        new workboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    devServer: {
        static: './dist'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}