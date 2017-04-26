const path = require('path');
// const Ext = require('extract-text-webpack-plugin');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 常用路径配置
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'app.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    module: {
        // preLoaders: [
        //     {
        //         test: /\.jsx?$/,
        //         loaders: ['eslint'],
        //         include: APP_PATH
        //     }
        // ],
        rules: [
            {
                test: /\.jsx$/,
                loaders: 'babel-loader',
                include: APP_PATH
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        // new Ext('css/style.css')
        new HtmlWebpackPlugin({
            title: 'my first react app'
        })
    ]
};
